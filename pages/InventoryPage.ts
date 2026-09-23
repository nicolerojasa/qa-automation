import { type Page, type Locator } from '@playwright/test';
export class InventoryPage {
readonly page: Page;
readonly title: Locator;
readonly items: Locator;
readonly prices: Locator;
readonly sortSelect: Locator;
readonly cartBadge: Locator;
readonly cartLink: Locator;
readonly menuButton: Locator;
readonly logoutLink: Locator;
constructor(page: Page) {
this.page = page;
this.title = page.getByTestId('title');
this.items = page.getByTestId('inventory-item');
this.prices = page.getByTestId('inventory-item-price');
this.sortSelect = page.getByTestId('product-sort-container');
this.cartBadge = page.getByTestId('shopping-cart-badge');
this.cartLink = page.getByTestId('shopping-cart-link');
this.menuButton = page.getByRole('button', { name: 'Open Menu' });
this.logoutLink = page.getByTestId('logout-sidebar-link');
}
// Busca la tarjeta del producto por su nombre y pulsa su boton
async addToCart(productName: string) {
await this.items
.filter({ hasText: productName })
.getByRole('button', { name: 'Add to cart' })
.click();
}
async removeFromCart(productName: string) {
await this.items
.filter({ hasText: productName })
.getByRole('button', { name: 'Remove' })
.click();
}
async sortBy(value: 'az' | 'za' | 'lohi' | 'hilo') {
await this.sortSelect.selectOption(value);
}
async logout() {
await this.menuButton.click();
await this.logoutLink.click();
}
}