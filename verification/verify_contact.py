from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Mock the Web3Forms API response
    page.route("https://api.web3forms.com/submit", lambda route: route.fulfill(
        status=200,
        content_type="application/json",
        body='{"success": true, "message": "Form Submitted Successfully"}'
    ))

    # Go to the app.
    page.goto("http://localhost:5173/")

    # Wait for network idle to ensure redirect happens (to /en usually)
    page.wait_for_load_state("networkidle")

    print(f"Current URL: {page.url}")

    # Find the form.
    # The form inputs have names: name, email, message.
    name_input = page.locator('input[name="name"]')

    # Scroll to the element to ensure visibility
    name_input.scroll_into_view_if_needed()

    expect(name_input).to_be_visible()

    # Fill form
    name_input.fill("Test User")
    page.locator('input[name="email"]').fill("test@example.com")
    page.locator('textarea[name="message"]').fill("This is a test message from Playwright.")

    # Click submit
    submit_btn = page.locator('button[type="submit"]')
    submit_btn.click()

    # Wait for success message "Sent!"
    # Since we are on /en (likely), it should be "Sent!"
    success_msg = page.get_by_text("Sent!")
    expect(success_msg).to_be_visible()

    print("Form submitted and success message visible.")

    # Take screenshot
    page.screenshot(path="/home/jules/verification/verification.png")

    browser.close()

if __name__ == "__main__":
    with sync_playwright() as playwright:
        run(playwright)
