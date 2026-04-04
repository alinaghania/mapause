import { test, expect } from "@playwright/test";

test.describe("Catalogue produits", () => {
  test("affiche les produits", async ({ page }) => {
    await page.goto("/products");

    await expect(page.locator("h1")).toBeVisible();

    const productLinks = page.locator("a[href^='/products/']");
    await expect(productLinks.first()).toBeVisible();

    await page.screenshot({
      path: "tests/results/catalog-full.png",
      fullPage: true,
    });
  });

  test("filtre par categorie fonctionne", async ({ page }) => {
    await page.goto("/products?category=tops");
    await expect(page.getByRole("heading", { name: "Tops Brodes" })).toBeVisible();
    await page.screenshot({ path: "tests/results/catalog-tops.png", fullPage: true });
  });

  test("navigation vers fiche produit", async ({ page }) => {
    await page.goto("/products");
    const firstProduct = page.locator("a[href^='/products/']").first();
    await firstProduct.click();
    await expect(page.locator("text=Ajouter au panier")).toBeVisible();
    await page.screenshot({
      path: "tests/results/product-detail.png",
      fullPage: true,
    });
  });
});
