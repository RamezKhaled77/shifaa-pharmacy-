
import { homeView } from './views/home.js';
import { productsView } from './views/products.js';
import { productDetailsView } from './views/productDetails.js';
import { cartView } from './views/cart.js';
import { checkoutView } from './views/checkout.js';
import { $ } from './utils/dom.js';

const routes = {
    '/': homeView,
    '/products': productsView,
    '/product/:id': productDetailsView,
    '/cart': cartView,
    '/checkout': checkoutView
};

export class Router {
    constructor() {
        window.addEventListener('popstate', () => this.handleRoute());
    }

    navigateTo(path) {
        window.history.pushState({}, '', path);
        this.handleRoute();
    }

    async handleRoute() {
        const path = window.location.pathname;
        const mainContent = $('#main-content');
        
        // Simple router logic - matches exact paths or params
        // For static GH pages or non-server environments, we might need hash routing
        // But let's stick to Path for now assuming local server support
        
        // Handling /product/:id logic roughly
        let view = routes[path];
        
        if (!view) {
             // Basic 404
             mainContent.innerHTML = '<h1>404 - Page Not Found</h1>';
             return;
        }

        mainContent.innerHTML = await view();
    }
    
    // Initial load
    init() {
        this.handleRoute();
        
        // Intercept link clicks
        document.body.addEventListener('click', e => {
            if (e.target.matches('[data-link]')) {
                e.preventDefault();
                this.navigateTo(e.target.href);
            }
        });
    }
}

export const router = new Router();
