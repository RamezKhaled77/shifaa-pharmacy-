
import { cartService } from '../services/cartService.js';
import { appState } from '../state.js';

export const Header = () => {
    // Subscribe to state changes to update cart count dynamically
    // Note: Since Header returns a string, we might need a way to re-render just the badge
    // For simplicity in this vanilla setup, we'll return the initial HTML and let a separate script update it,
    // or rely on full page re-renders. A better approach in vanilla is to return a DOM element.
    
    // BUT, since my app.js sets innerHTML, I'll stick to string for now and maybe add a re-render listener in app.js or specific component logic.
    // Ideally, Components should return DOM Nodes to be reactive.
    
    const count = cartService.getItemCount();

    return `
        <nav style="background: white; border-bottom: 1px solid var(--border-color); padding: 1rem 0; position: sticky; top: 0; z-index: 100;">
            <div class="container flex justify-between items-center">
                <a href="/" data-link style="font-size: 1.5rem; font-weight: 700; color: var(--primary-color);">
                    Shifaa Pharmacy
                </a>
                
                <div class="flex items-center gap-4">
                    <a href="/" data-link>Home</a>
                    <a href="/products" data-link>Products</a>
                    <a href="/cart" data-link class="flex items-center gap-2" style="position: relative;">
                         <span>Cart</span>
                         <span id="cart-badge" style="background: var(--primary-color); color: white; border-radius: 999px; padding: 0.1rem 0.5rem; font-size: 0.75rem;">${count}</span>
                    </a>
                </div>
            </div>
        </nav>
    `;
};
