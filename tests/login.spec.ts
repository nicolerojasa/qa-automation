import { test, expect } from '@playwright/test';
test('login correcto lleva al inventario', async ({ page }) => {
// Abrir la web
await page.goto('https://www.saucedemo.com');
// Rellenar el formulario. fill() borra lo que hubiera y escribe
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button', { name: 'Login' }).click();
// Comprobar el resultado. expect espera hasta que se cumpla o pasen 5 s
await expect(page).toHaveURL(/inventory/);
await expect(page.getByText('Products')).toBeVisible();
});
test('login con clave incorrecta muestra error', async ({ page }) => {
await page.goto('https://www.saucedemo.com');
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('clave_mala');
await page.getByRole('button', { name: 'Login' }).click();
await expect(page.getByText('Username and password do not match')).toBeVisible();
});
