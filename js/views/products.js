
import { products } from '../../data/products.js';
import { ProductCard } from '../components/productCard.js';

export const productsView = async () => {
    return `
        <div class="container">
            <h1 style="margin-bottom: 2rem;">All Products</h1>
            <div class="grid grid-cols-4">
                ${products.map(p => ProductCard(p)).join('')}
            </div>
        </div>
    `;
};
