
export const checkoutView = async () => {
    return `
        <div class="container" style="max-width: 600px; padding-top: 2rem;">
            <h1 style="margin-bottom: 2rem; text-align: center;">Checkout</h1>
            <form style="display: grid; gap: 1.5rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Full Name</label>
                    <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email Address</label>
                    <input type="email" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Shipping Address</label>
                    <textarea rows="3" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm);"></textarea>
                </div>
                <button type="button" onclick="alert('Order Placed Successfully!')" style="background: var(--primary-color); color: white; padding: 1rem; border-radius: var(--radius-md); font-weight: 600; margin-top: 1rem;">Place Order</button>
            </form>
        </div>
    `;
};
