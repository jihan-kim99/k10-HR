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

    # Go to the consultation page.
    page.goto("http://localhost:5173/en/consultation")

    # Wait for load
    page.wait_for_load_state("networkidle")

    # Select "Worker" option to show the form
    # Try using role locator for better reliability or text
    worker_option = page.get_by_text("For Workers", exact=False).first
    worker_option.click()

    # Wait for the form to appear. Using name input as a proxy.
    name_input = page.locator('input[name="name"]')
    name_input.wait_for(state="visible")

    # Fill form
    name_input.fill("Test Worker")
    page.locator('input[name="email"]').fill("worker@example.com")

    # Debug print
    print("Filled email. Now looking for phone input...")

    # Use placeholder or role if name is problematic, but name should work.
    # Maybe there are multiple inputs with name="phone" even if one is conditional?
    # React might not unmount immediately or there might be something else.
    # Let's count them.
    phone_inputs = page.locator('input[name="phone"]')
    count = phone_inputs.count()
    print(f"Found {count} phone inputs.")

    if count > 0:
        # Fill the first visible one
        phone_inputs.first.fill("1234567890")
    else:
        print("No phone input found!")

    page.locator('textarea[name="message"]').fill("I need a visa.")

    # Click submit
    submit_btn = page.locator('button[type="submit"]')
    submit_btn.click()

    # Wait for success message "Sent!"
    success_msg = page.get_by_text("Sent!")
    expect(success_msg).to_be_visible()

    print("Consultation form submitted and success message visible.")

    # Take screenshot
    page.screenshot(path="/home/jules/verification/verification_consultation.png")

    browser.close()

if __name__ == "__main__":
    with sync_playwright() as playwright:
        run(playwright)
