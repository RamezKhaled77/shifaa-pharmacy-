
import { StorageService } from './storageService.js';
import { appState } from '../state.js';

class CartService {
    constructor() {
        this.cart = StorageService.getCart();
        this.updateState();
    }

    addToCart(product) {
        const existingItem = this.cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }
        this.save();
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.save();
    }

    updateQuantity(productId, quantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            if (item.quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                this.save();
            }
        }
    }

    getTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
    
    getItemCount() {
        return this.cart.reduce((count, item) => count + item.quantity, 0);
    }

    save() {
        StorageService.saveCart(this.cart);
        this.updateState();
    }
    
    updateState() {
        appState.setState({ 
            cart: this.cart,
            cartTotal: this.getTotal(),
            cartCount: this.getItemCount()
        });
    }
}

export const cartService = new CartService();
