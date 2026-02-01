
import { products } from '../../data/products.js';
import { cartService } from '../services/cartService.js';

export const productDetailsView = async () => {
    // Extract ID from URL
    const path = window.location.pathname;
    const id = parseInt(path.split('/').pop());
    const product = products.find(p => p.id === id);

    if (!product) return `<h1>Product Not Found</h1>`;

    return `
        <div class="container" style="padding-top: 2rem;">
            <div class="grid grid-cols-2" style="gap: 4rem;">
                <div style="background: #f1f5f9; border-radius: var(--radius-lg); height: 400px; display: flex; align-items: center; justify-content: center;">
                     ${product.image ? `<img src="${product.image}" style="max-height: 100%;">` : 'No Image'}
                </div>
                <div>
                    <div style="color: var(--primary-color); font-weight: 600; margin-bottom: 1rem; text-transform: uppercase;">${product.category}</div>
                    <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">${product.name}</h1>
                    <p style="font-size: 1.5rem; font-weight: 700; margin-bottom: 2rem;">$${product.price.toFixed(2)}</p>
                    <p style="color: var(--text-muted); margin-bottom: 2rem; line-height: 1.8;">${product.description}</p>
                    
                    <button class="add-to-cart-btn" data-id="${product.id}" style="background: var(--primary-color); color: white; padding: 1rem 3rem; border-radius: var(--radius-md); font-size: 1.125rem; font-weight: 600;">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
};
