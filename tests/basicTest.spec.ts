import { test, expect } from '@playwright/test';

test('Has title', {tag: "@smoke"},async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Practice Software Testing/);
});

test('Sign In', {tag: "@smoke"},async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  // Click the get started link.
  await page.getByPlaceholder('Your email').fill('customer@practicesoftwaretesting.com');
  await page.getByPlaceholder('Your password').fill('welcome01');
  await page.getByRole('button', { name: 'Login' }).click();

await expect(page.getByTestId('nav-menu')).toContainText('Jane Doe', {
  timeout: 60000,
});
});
