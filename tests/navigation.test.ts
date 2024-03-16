import { test, expect } from "@playwright/test";

test("navigation smoke test", async ({ page }) => {
	await page.goto("/");
	await expect(page.getByTestId("hydrated")).toBeVisible({ timeout: 10000 });

	await expect(page).toHaveTitle("Paulina Pullers");
	await expect(page.getByRole("heading", { name: "Photo Teo", level: 1 })).toBeVisible();

	// Navigate to 'Contact' page
	await page.getByRole("link", { name: "Contact" }).click();

	await expect(page).toHaveTitle("Paulina Pullers");
	await expect(
		page.getByRole("heading", { name: "Find me on socials", level: 2, exact: true }),
	).toBeVisible();
});
