import { test, expect } from '../fixtures/test';
test('usuario bloqueado ve un mensaje de bloqueo', async ({ loginPage }) => {
await loginPage.goto();
await loginPage.login('locked_out_user', 'secret_sauce');
await expect(loginPage.error).toContainText('locked out');
});