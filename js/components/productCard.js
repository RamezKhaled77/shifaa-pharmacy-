
export const ProductCard = (product) => {
    return `
        <div class="product-card" style="background: white; border: 1px solid var(--border-color); border-radius: var(--radius-md); overflow: hidden; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
            <div style="height: 200px; background-color: #f1f5f9; display: flex; align-items: center; justify-content: center;">
                <!-- Placeholder for image if not exists -->
                ${product.image ? `<img src="${product.image}" alt="${product.name}" style="height: 100%; width: 100%; object-fit: cover;">` : `<span style="color: var(--text-muted);">No Image</span>`}
            </div>
            <div style="padding: 1rem;">
                <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">${product.category}</div>
                <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem;">
                    <a href="/product/${product.id}" data-link>${product.name}</a>
                </h3>
                <div class="flex justify-between items-center" style="margin-top: 1rem;">
                    <span style="font-weight: 700; color: var(--primary-color); font-size: 1.25rem;">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" data-id="${product.id}" style="background: var(--primary-color); color: white; padding: 0.5rem 1rem; border-radius: var(--radius-sm); font-size: 0.875rem;">Add</button>
                </div>
            </div>
        </div>
    `;
};
