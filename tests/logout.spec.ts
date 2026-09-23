import { test, expect } from '../fixtures/test';
test('cerrar sesion vuelve a la pantalla de login', async ({ loginPage, inventoryPage, page }) =>{
await loginPage.goto();
await loginPage.login('standard_user', 'secret_sauce');
await inventoryPage.logout();
await expect(page).toHaveURL('https://www.saucedemo.com/');
await expect(loginPage.loginButton).toBeVisible();
});
