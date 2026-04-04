import { test, expect } from "@playwright/test";

test.describe("Page d accueil", () => {
  test("affiche le hero, les produits et les categories", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("text=Sona").first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Decouvrir", exact: true })).toBeVisible();
    await expect(page.locator("text=Nos coups de coeur")).toBeVisible();

    await page.screenshot({
      path: "tests/results/home-full.png",
      fullPage: true,
    });
  });

  test("navigation vers le catalogue fonctionne", async ({ page }) => {
    await page.goto("/");
    await page.click("text=Decouvrir");
    await expect(page).toHaveURL(/\/products/);
    await page.screenshot({ path: "tests/results/home-to-catalog.png" });
  });
});
