import { cartService } from "../services/cartService.js";
import { $ } from "../utils/dom.js";
import { router } from "../router.js";
import { confirmModal } from "../utils/modal.js";

export const cartView = async () => {
  const cart = cartService.cart;
  const subtotal = cartService.getTotal();
  const itemCount = cartService.getItemCount();
  const shipping = subtotal > 0 ? 0 : 0; // FREE Shipping as per image
  const tax = subtotal * 0.05; // 5% Estimated Tax
  const total = subtotal + tax + shipping;

  const setupListeners = () => {
    // Quantity listeners
    document.querySelectorAll(".qty-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = parseInt(btn.dataset.id);
        const currentQty = cart.find((item) => item.id === id)?.quantity || 0;
        if (btn.classList.contains("plus")) {
          cartService.updateQuantity(id, currentQty + 1);
        } else {
          cartService.updateQuantity(id, currentQty - 1);
        }
        router.handleRoute();
      });
    });

    // Remove listeners
    document.querySelectorAll(".btn-action.remove").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const id = parseInt(btn.dataset.id);
        const item = cart.find((i) => i.id === id);

        const confirmed = await confirmModal({
          title: "Remove Item?",
          message: `Are you sure you want to remove "${item?.name}" from your cart?`,
          confirmText: "Remove",
          cancelText: "Keep it",
        });

        if (confirmed) {
          cartService.removeFromCart(id);
          router.handleRoute();
        }
      });
    });
  };

  // Delay listener attachment
  setTimeout(setupListeners, 100);

  if (cart.length === 0) {
    return `
            <div class="cart-page">
                <div class="cart-header">
                    <h1>Shopping Cart</h1>
                    <p class="cart-subtitle">Your medical basket is currently empty</p>
                </div>
                <div style="text-align: center; padding: 6rem 0; background: white; border-radius: 20px; box-shadow: var(--shadow-sm);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#cbd5e0" stroke-width="1.5" style="margin-bottom: 1.5rem;"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    <h2 style="color: var(--color-text-primary);">Your Cart is Empty</h2>
                    <p style="color: #64748b;  text-align: center; margin: 2rem auto;">Looks like you haven't added any medicines or devices yet.</p>
                    <a href="#/products" data-link class="btn btn-primary" style="padding: 12px 32px;">Start Shopping</a>
                </div>
            </div>
        `;
  }

  const getCategoryClass = (cat) => {
    cat = cat.toLowerCase();
    if (cat.includes("medicine")) return "medicine";
    if (cat.includes("device") || cat.includes("equipment")) return "equipment";
    return "protection";
  };

  const getStockStatus = (item) => {
    if (item.id % 3 === 0) return "LIMITED STOCK";
    if (item.id % 2 === 0) return "FAST SHIPPING";
    return "IN STOCK";
  };

  return `
        <div class="cart-page">
            <div class="cart-header">
                <h1>Shopping Cart</h1>
                <p class="cart-subtitle">You have ${itemCount} medical item${itemCount !== 1 ? "s" : ""} in your basket</p>
            </div>

            <div class="cart-layout">
                <div class="cart-items-list">
                    ${cart
                      .map(
                        (item) => `
                        <div class="cart-item-card">
                            <div class="cart-item-image">
                                <img src="${item.image || "assets/images/product.png"}" alt="${item.name}">
                            </div>
                            <div class="cart-item-info">
                                <div class="cart-item-top">
                                    <div class="cart-item-badges">
                                        <span class="badge-tag ${getCategoryClass(item.category)}">${item.category}</span>
                                        <span class="stock-status">• ${getStockStatus(item)}</span>
                                    </div>
                                    <span class="cart-item-price">$${item.price.toFixed(2)}</span>
                                </div>
                                <h3 class="cart-item-name">${item.name}</h3>
                                <div class="cart-item-meta">${item.brand} • ${item.description.substring(0, 60)}${item.description.length > 60 ? "..." : ""}</div>
                                
                                <div class="cart-item-actions">
                                    <div class="action-buttons">
                                        <button class="btn-action remove" data-id="${item.id}">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                            Remove
                                        </button>
                                        
                                    </div>
                                    
                                    <div class="quantity-selector">
                                        <button class="qty-btn minus" data-id="${item.id}">-</button>
                                        <span class="qty-val">${item.quantity}</span>
                                        <button class="qty-btn plus" data-id="${item.id}">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `,
                      )
                      .join("")}
                </div>

                <aside class="order-summary-card">
                    <h2>Order Summary</h2>
                    
                 

                    <div class="summary-rows">
                        <div class="summary-row">
                            <span>Subtotal</span>
                            <span class="val">$${subtotal.toFixed(2)}</span>
                        </div>
                        <div class="summary-row">
                            <span>Shipping</span>
                            <span class="free">FREE</span>
                        </div>
                        <div class="summary-row">
                            <span>Estimated Tax</span>
                            <span class="val">$${tax.toFixed(2)}</span>
                        </div>
                        <div class="summary-row total">
                            <span>Total</span>
                            <span class="val">$${total.toFixed(2)}</span>
                        </div>
                    </div>

                    <div class="cart-actions">
                        <a href="#/checkout" data-link class="btn-checkout">
                            Proceed to Checkout
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>
                        <a href="#/products" data-link class="btn-continue">Continue Shopping</a>
                    </div>

                    <div class="trust-badges">
                        <div class="trust-badge">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            Secure Payment
                        </div>
                        <div class="trust-badge">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            Pharmacist Verified
                        </div>
                        <div class="trust-badge">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                            Next Day Delivery
                        </div>
                        <div class="trust-badge">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                            Easy Returns
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    `;
};
