import { test, expect } from '@playwright/test';

test('has title', {tag: "@first"},async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Practice Software Testing/);
});

test('Sign In', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  // Click the get started link.
  await page.getByPlaceholder('Your email').fill('customer@practicesoftwaretesting.com');
  await page.getByPlaceholder('Your password').fill('welcome01');
  await page.getByRole('button', { name: 'Login' }).click();

      // Wait for the page to load after login
    await page.waitForLoadState('networkidle');
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
});
