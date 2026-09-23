import { test, expect } from '../fixtures/test';

test.describe('Login', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('login correcto lleva al inventario', async ({ loginPage, inventoryPage, page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
    await expect(inventoryPage.title).toHaveText('Products');
  });

  test('login con clave incorrecta muestra error', async ({ loginPage }) => {
    await loginPage.login('standard_user', 'clave_mala');
    await expect(loginPage.error).toContainText('do not match');
  });
});