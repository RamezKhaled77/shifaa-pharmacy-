
export const CartItem = (item) => {
    return `
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
    `;
};
