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
  await page.screenshot({ path: '/tmp/wl-01-cart.png' });

  // Click "Passer la commande" -> should go to /checkout
  await page.locator('button:has-text("Passer la commande")').click();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/tmp/wl-02-checkout.png' });
  console.log('Checkout URL: ' + page.url());

  // Fill the form
  await page.fill('input[placeholder="Adresse email *"]', 'test@mapause.fr');
  await page.fill('input[placeholder="Telephone (pour la livraison)"]', '0612345678');
  await page.fill('input[placeholder="Prenom *"]', 'Marie');
  await page.fill('input[placeholder="Nom *"]', 'Dupont');
  await page.fill('input[placeholder="Adresse *"]', '12 rue de la Paix');
  await page.fill('input[placeholder="Code postal *"]', '75002');
  await page.fill('input[placeholder="Ville *"]', 'Paris');
  await page.screenshot({ path: '/tmp/wl-03-filled.png' });
  console.log('Form filled');

  // Submit
  await page.locator('button:has-text("Valider ma commande")').click();
  await page.waitForTimeout(3000);
  await page.screenshot({ path: '/tmp/wl-04-modal.png' });
  console.log('After submit, modal should be visible');

  await browser.close();
  console.log('Waitlist test done!');
})();
