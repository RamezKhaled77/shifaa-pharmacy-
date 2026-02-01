
import { cartService } from '../services/cartService.js';

export const cartView = async () => {
    const cart = cartService.cart;
    const total = cartService.getTotal();

    if (cart.length === 0) {
        return `
            <div class="container" style="text-align: center; padding: 4rem 0;">
                <h2 style="margin-bottom: 1rem;">Your Cart is Empty</h2>
                <a href="/products" data-link style="color: var(--primary-color); text-decoration: underline;">Continue Shopping</a>
            </div>
        `;
    }

    return `
        <div class="container">
            <h1 style="margin-bottom: 2rem;">Shopping Cart</h1>
            <div class="grid grid-cols-3" style="grid-template-columns: 2fr 1fr; gap: 2rem;">
                <div>
                    ${cart.map(item => `
                        <div class="flex items-center justify-between" style="padding: 1rem; border-bottom: 1px solid var(--border-color);">
                            <div class="flex items-center gap-4">
                                <div style="width: 64px; height: 64px; background: #f1f5f9; border-radius: var(--radius-sm);"></div>
                                <div>
                                    <h3>${item.name}</h3>
                                    <p style="color: var(--text-muted);">$${item.price}</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <span style="font-weight: 600;">x${item.quantity}</span>
                                <span style="font-weight: 700;">$${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div style="background: #f8fafc; padding: 2rem; border-radius: var(--radius-lg);">
                    <h3 style="margin-bottom: 1rem;">Order Summary</h3>
                    <div class="flex justify-between" style="margin-bottom: 0.5rem;">
                        <span>Subtotal</span>
                        <span>$${total.toFixed(2)}</span>
                    </div>
                    <div class="flex justify-between" style="margin-bottom: 2rem; font-weight: 700; font-size: 1.25rem;">
                        <span>Total</span>
                        <span>$${total.toFixed(2)}</span>
                    </div>
                    <a href="/checkout" data-link style="display: block; text-align: center; background: var(--primary-color); color: white; padding: 1rem; border-radius: var(--radius-md); font-weight: 600;">Proceed to Checkout</a>
                </div>
            </div>
        </div>
    `;
};
