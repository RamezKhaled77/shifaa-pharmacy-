
import { products } from '../../data/products.js';
import { ProductCard } from '../components/productCard.js';
import { cartService } from '../services/cartService.js';
import { $ } from '../utils/dom.js';

export const homeView = async () => {
    const featuredProducts = products.slice(0, 4);

    // Attach event listeners after render
    // Since this function returns string HTML, we need a way to attach events.
    // In a simple vanilla setup, we can use a timeout or a mutation observer, 
    // OR we delegate events to the document body in main.js or router.
    
    // For now, let's just return the HTML string.
    
    return `
        <div class="container">
            <section style="background: linear-gradient(to right, var(--primary-color), var(--primary-dark)); color: white; padding: 4rem 2rem; border-radius: var(--radius-lg); margin-bottom: 3rem; text-align: center;">
                <h1 style="font-size: 3rem; font-weight: 700; margin-bottom: 1rem;">Your Health, Delivered.</h1>
                <p style="font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.9;">Premium supplements and pharmacy essentials at your doorstep.</p>
                <a href="/products" data-link style="background: white; color: var(--primary-color); padding: 0.75rem 2rem; border-radius: 999px; font-weight: 600; display: inline-block;">Shop Now</a>
            </section>

            <h2 style="font-size: 2rem; margin-bottom: 1.5rem;">Featured Products</h2>
            <div class="grid grid-cols-4">
                ${featuredProducts.map(p => ProductCard(p)).join('')}
            </div>
        </div>
    `;
};

// Event delegation for "Add to Cart"
document.addEventListener('click', e => {
    if (e.target.matches('.add-to-cart-btn')) {
        const id = parseInt(e.target.dataset.id);
        const product = products.find(p => p.id === id);
        if (product) {
            cartService.addToCart(product);
            alert(`Added ${product.name} to cart!`);
            // Update header badge
            const badge = document.querySelector('#cart-badge');
            if (badge) badge.textContent = cartService.getItemCount();
        }
    }
});
