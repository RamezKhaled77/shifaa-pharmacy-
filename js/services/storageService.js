
const STORAGE_KEY = 'shifaa_cart';

export const StorageService = {
    getCart() {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    },
    
    saveCart(cart) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    },
    
    clearCart() {
        localStorage.removeItem(STORAGE_KEY);
    }
};
