import { test, expect } from "@playwright/test";

test.describe("Panier", () => {
  test("ajout au panier et affichage", async ({ page }) => {
    await page.goto("/products");
    const firstProduct = page.locator("a[href^='/products/']").first();
    await firstProduct.click();

    await expect(page.locator("text=Ajouter au panier")).toBeVisible();

    const sizeButton = page.locator("button").filter({ hasText: /^(XS|S|M|L|34|36|Unique)$/ }).first();
    await sizeButton.click();

    await page.click("text=Ajouter au panier");
    await expect(page.locator("text=ajoute au panier")).toBeVisible();

    await page.goto("/cart");
    await expect(page.getByRole("heading", { name: "Votre panier" })).toBeVisible();
    await expect(page.locator("text=Passer la commande")).toBeVisible();

    await page.screenshot({
      path: "tests/results/cart-page.png",
      fullPage: true,
    });
  });

  test("panier vide affiche message", async ({ page }) => {
    await page.goto("/cart");
    await expect(page.locator("text=Votre panier est vide")).toBeVisible();
    await page.screenshot({ path: "tests/results/cart-empty.png" });
  });
});
