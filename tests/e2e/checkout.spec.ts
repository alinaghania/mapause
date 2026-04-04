import { test, expect } from "@playwright/test";

test.describe("Checkout", () => {
  test("pages de confirmation et annulation", async ({ page }) => {
    await page.goto("/checkout/success");
    await expect(page.locator("text=Merci pour votre commande")).toBeVisible();
    await page.screenshot({ path: "tests/results/checkout-success.png" });

    await page.goto("/checkout/cancel");
    await expect(page.locator("text=Commande annulee")).toBeVisible();
    await page.screenshot({ path: "tests/results/checkout-cancel.png" });
  });
});
