const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://aurapause.com', { waitUntil: 'networkidle', timeout: 30000 });

  // Add to cart
  await page.evaluate(() => document.getElementById('product')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(500);
  await page.locator('button:has-text("Ajouter au panier")').first().click();
  await page.waitForTimeout(1000);

  // Go to cart
  await page.goto('https://aurapause.com/cart', { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/checkout-01-cart.png' });
  console.log('Cart page OK');

  // Click "Passer la commande"
  const checkoutBtn = page.locator('button:has-text("Passer la commande")');
  if (await checkoutBtn.isVisible()) {
    await checkoutBtn.click();
    // Wait for redirect to Stripe
    await page.waitForTimeout(5000);
    await page.screenshot({ path: '/tmp/checkout-02-stripe.png' });
    console.log('After checkout click, URL: ' + page.url());
  } else {
    console.log('ERROR: Checkout button not found');
  }

  // Also test success page
  await page.goto('https://aurapause.com/checkout/success', { waitUntil: 'networkidle', timeout: 15000 });
  await page.screenshot({ path: '/tmp/checkout-03-success.png' });
  console.log('Success page OK');

  await browser.close();
  console.log('Checkout test done!');
})();
