import { test, expect } from "@playwright/test";

test("navigation smoke test", async ({ page }) => {
	await page.goto("/");

	await expect(page).toHaveTitle("Photo Teo");
	await expect(page.getByRole("heading", { name: "Photo Teo", level: 1 })).toBeVisible();

	// Navigate to 'Contact' page
	// const contactPage = await page.getByRole("link", { name: "Contact" });
	await page.getByRole("link", { name: "Contact" }).click();

	await expect(page).toHaveTitle("Contact Page");
	await expect(
		page.getByRole("heading", { name: "Find me on socials", level: 2, exact: true }),
	).toBeVisible();
});
