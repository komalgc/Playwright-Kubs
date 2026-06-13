import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'serial' });
test.describe('Authenticate Once', () => {
    test('Sign In', async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/auth/login');
        await page.getByPlaceholder('Your email').fill('customer@practicesoftwaretesting.com');
        await page.getByPlaceholder('Your password').fill('welcome01');
        await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByTestId('nav-menu')).toContainText('Jane Doe', {
  timeout: 60000,
});


        await page.context().storageState({ path: "playwright/.auth.json" });
    });

    test.use({ storageState: "playwright/.auth.json" })
    test('Access My Account', async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/my-account');
await expect(page.getByTestId('nav-menu')).toContainText('Jane Doe', {
  timeout: 60000,
});
    });
});
