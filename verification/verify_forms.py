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

    # 1. Verify Contact Form
    print("Verifying Contact Form...")
    page.goto("http://localhost:5173/")
    page.wait_for_load_state("networkidle")

    name_input = page.locator('input[name="name"]')
    name_input.scroll_into_view_if_needed()
    expect(name_input).to_be_visible()

    name_input.fill("Test User")
    page.locator('input[name="email"]').fill("test@example.com")
    page.locator('textarea[name="message"]').fill("This is a test message from Playwright.")

    page.locator('button[type="submit"]').click()

    success_msg = page.get_by_text("Sent!")
    expect(success_msg).to_be_visible()
    print("Contact Form Verified.")

    # 2. Verify Consultation Form
    print("Verifying Consultation Form...")
    page.goto("http://localhost:5173/en/consultation")
    page.wait_for_load_state("networkidle")

    # Select Worker option
    page.get_by_text("For Workers").click()

    # Fill form
    page.locator('input[name="name"]').fill("Worker Name")
    page.locator('input[name="phone"]').fill("1234567890")
    page.locator('input[name="email"]').fill("worker@example.com")
    page.locator('textarea[name="message"]').fill("I need a job.")

    submit_btn = page.get_by_role("button", name="Send Message") # "Send Message" is localized text for submit button in en.json? No, wait.
    # In Consultation.jsx: {t("consultation.form.submit")}
    # In en.json: "submit": "Send Consultation Request" for consultation form? Let's check.
    # checking en.json content...
    # "consultation": { "form": { "submit": "Send Consultation Request" } }

    submit_btn = page.get_by_role("button", name="Send Consultation Request")
    submit_btn.scroll_into_view_if_needed()
    submit_btn.click()

    # Expect success message. It uses "contact.form.status.success" which is "Sent!"
    success_msg_consult = page.get_by_text("Sent!")
    expect(success_msg_consult).to_be_visible()
    print("Consultation Form Verified.")

    # Take screenshot of Consultation success
    page.screenshot(path="/home/jules/verification/verification_consultation.png")

    browser.close()

if __name__ == "__main__":
    with sync_playwright() as playwright:
        run(playwright)
