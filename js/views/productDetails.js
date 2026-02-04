import { products } from "../../data/products.js";
import { cartService } from "../services/cartService.js";
import { toast } from "../utils/toast.js";
import { Breadcrumbs } from "../components/breadcrumbs.js";
import { $ } from "../utils/dom.js";

export const productDetailsView = async () => {
  // Extract ID from Hash URL (e.g., #/product/1)
  const hash = window.location.hash;
  const id = parseInt(hash.split("/").pop());
  const product = products.find((p) => p.id === id);

  if (!product) {
    return `
            <div class="container" style="text-align: center; padding: 100px 0;">
                <h1>Product Not Found</h1>
                <p>The medicine you are looking for might have been moved.</p>
                <a href="#/products" class="btn btn-primary" style="margin-top: 20px;">Back to Products</a>
            </div>
        `;
  }

  const setupListeners = () => {
    const addBtn = $(".btn-add-detail");
    const thumbs = document.querySelectorAll(".thumb-image");

    if (addBtn) {
      addBtn.addEventListener("click", () => {
        cartService.addToCart(product);
        toast(`${product.name} added to cart!`);
      });
    }

    if (thumbs.length > 0) {
      thumbs.forEach((thumb) => {
        thumb.addEventListener("click", () => {
          thumbs.forEach((t) => t.classList.remove("active"));
          thumb.classList.add("active");
          const newSrc = thumb.querySelector("img").src;
          $(".main-detail-img").src = newSrc;
        });
      });
    }
  };

  setTimeout(setupListeners, 100);

  return `
        <div class="product-details-page-wrapper">
            ${Breadcrumbs([
              { label: "Products", path: "#/products" },
              { label: product.name },
            ])}
            <div class="product-details-page container">
            <div class="product-details-grid">
                <!-- Left: Image Gallery -->
                <div class="product-gallery">
                    <div class="main-image-wrapper">
                        <img src="${product.image}" alt="${product.name}" class="main-detail-img">
                    </div>
                    <div class="thumbnail-row">
                        <div class="thumb-image active">
                            <img src="${product.image}" alt="Thumb 1">
                        </div>
                        <div class="thumb-image">
                            <img src="assets/images/product.png" alt="Thumb 2">
                        </div>
                        <div class="thumb-image">
                            <img src="assets/images/hero-sec.png" alt="Thumb 3">
                        </div>
                    </div>
                </div>

                <!-- Right: Product Info -->
                <div class="product-info-wrapper">
                    <span class="info-status-badge">In Stock</span>
                    <h1 class="info-title">${product.name}</h1>
                    <p class="info-brand">${product.brand} Consumer Healthcare</p>
                    
                    <div class="info-rating-row">
                        <div class="stars">
                            ${"★".repeat(Math.floor(product.rating || 5))}${"☆".repeat(5 - Math.floor(product.rating || 5))}
                        </div>
                        <span class="review-count">(${product.reviews || 0} Reviews)</span>
                    </div>

                    <div class="info-price-row">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        <span class="old-price">$${(product.price * 1.25).toFixed(2)}</span>
                    </div>
                    <p class="price-note">Price inclusive of all taxes</p>

                    <div class="clinical-summary-box">
                        <div class="summary-header">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                            Clinical Summary
                        </div>
                        <p class="summary-text">
                            ${product.description} Formulated with advanced medical technology for faster absorption and effective relief from symptoms.
                        </p>
                    </div>

                    <div class="purchase-controls">
                        <button class="btn btn-add-detail">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                            Add to Cart
                        </button>
                    </div>

                    <div class="info-trust-row">
                        <div class="trust-item-detail">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            100% Genuine Medicine
                        </div>
                        <div class="trust-item-detail">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                            Free Delivery Over $50
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    `;
};
