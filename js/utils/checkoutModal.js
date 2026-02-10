import { cartService } from "../services/cartService.js";
import { toast } from "./toast.js";

/**
 * Premium Checkout Modal Utility
 * @returns {Promise} Resolves when order is "placed"
 */
export const checkoutModal = () => {
  return new Promise((resolve) => {
    const total = (cartService.getTotal() * 1.05).toFixed(2); // Subtotal + 5% tax

    // Create elements
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay checkout-modal-overlay";

    overlay.innerHTML = `
            <div class="modal-content checkout-modal-content">
                <button class="modal-close-btn" aria-label="Close modal">&times;</button>
                
                <div class="checkout-header">
                    <div class="checkout-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                    </div>
                    <div class="header-text">
                        <h2 class="modal-title">Complete Your Order</h2>
                        <p class="modal-description">Please provide your delivery details below.</p>
                    </div>
                </div>

                <form id="checkout-form" class="checkout-form">
                    <div class="form-group">
                        <label for="checkout-name">Full Name</label>
                        <input type="text" id="checkout-name" placeholder="e.g. John Doe" required>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="checkout-phone">Phone Number</label>
                            <input type="tel" id="checkout-phone" placeholder="e.g. +20 123 456 7890" required>
                        </div>
                        <div class="form-group">
                            <label for="checkout-email">Email (Optional)</label>
                            <input type="email" id="checkout-email" placeholder="john@example.com">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="checkout-address">Delivery Address</label>
                        <textarea id="checkout-address" placeholder="Full address, building number, street name..." rows="3" required></textarea>
                    </div>

                    <div class="form-group">
                        <label for="checkout-notes">Special Instructions (Optional)</label>
                        <textarea id="checkout-notes" placeholder="e.g. Ring the bell twice, leave at the door..." rows="2"></textarea>
                    </div>

                    <div class="order-preview">
                        <div class="preview-row">
                            <span>Order Total (Inc. Tax)</span>
                            <span class="preview-total">$${total}</span>
                        </div>
                    </div>

                    <button type="submit" class="btn-place-order">
                        Place Order Now
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </button>
                </form>
            </div>
        `;

    document.body.appendChild(overlay);

    // Animation in
    setTimeout(() => overlay.classList.add("show"), 10);

    const closeModal = (result) => {
      overlay.classList.remove("show");
      setTimeout(() => {
        overlay.remove();
        resolve(result);
      }, 300);
    };

    // Close button
    overlay
      .querySelector(".modal-close-btn")
      .addEventListener("click", () => closeModal(false));

    // Form submission
    const form = overlay.querySelector("#checkout-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = {
        name: document.getElementById("checkout-name").value,
        phone: document.getElementById("checkout-phone").value,
        email: document.getElementById("checkout-email").value,
        address: document.getElementById("checkout-address").value,
        notes: document.getElementById("checkout-notes").value,
        total: total,
        items: cartService.cart,
      };

      console.log("Order Placed Successfully:", formData);

      // Success State
      const content = overlay.querySelector(".modal-content");
      content.innerHTML = `
        <div class="order-success-state">
            <div class="success-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h2 class="modal-title">Order Received!</h2>
            <p class="modal-description">Thank you ${formData.name}. Your order has been placed successfully and our pharmacist is reviewing it.</p>
            <div class="order-summary-box">
                <small>Order Amount</small>
                <h3>$${total}</h3>
            </div>
            <button class="btn-modal confirm close-success" style="width: 100%; grid-column: span 2; background: var(--color-primary);">Back to Shop</button>
        </div>
      `;

      // Clear cart
      cartService.clearCart();

      content
        .querySelector(".close-success")
        .addEventListener("click", () => closeModal(true));
    });

    // Close on overlay click
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal(false);
    });
  });
};
