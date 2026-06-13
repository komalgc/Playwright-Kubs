import { test, expect } from '@playwright/test';

test.describe('Basic Assertions', () => {
test('Login and Validate', {tag: "@smoke"},  async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/auth/login');
    await page.getByPlaceholder('Your email').fill('customer@practicesoftwaretesting.com');
    await page.getByPlaceholder('Your password').fill('welcome01');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByTestId('nav-home').click();

    await expect(page.locator('.col-md-9').getByRole('link')).toHaveCount(9);
    const productscount = await page.locator('.col-md-9').getByRole('link').count();

    const products = await  page.locator('.col-md-9').getByRole('link');

    for (let i =0; i<productscount; i++){
        const productcard = products.nth(i);
        const productname = await productcard.getByTestId('product-name').innerText();

        if (productname.trim() === 'Thor Hammer'){
            await productcard.click();
            await expect(page.getByRole('heading', { name: 'Thor Hammer' })).toBeVisible();
            break;
        }

    }
});
});