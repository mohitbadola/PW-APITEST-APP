import { test, expect } from "@playwright/test";
import tags from "../test-data/tags.json";

test.beforeEach(async ({ page }) => {
  await page.route("*/**/api/tags", async (route) => {
    await route.fulfill({
      body: JSON.stringify(tags),
    });
  });

  await page.goto("http://conduit.bondaracademy.com/");
});
test("has title", async ({ page }) => {
  // await expect(page.locator('.navbar-brand')).toHaveText('conduit')
  await expect(page.locator(".sidebar")).toContainText("automation");
});
