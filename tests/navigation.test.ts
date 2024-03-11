import { test, expect } from "@playwright/test";

test("navigation smoke test", async ({ page }) => {
	await page.goto("/");

	await expect(page).toHaveTitle(/Photo Teo/);
	await expect(page.getByRole("heading", { name: "Photo Teo", level: 1 })).toBeVisible();
});
