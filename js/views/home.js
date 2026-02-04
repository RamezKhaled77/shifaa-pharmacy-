import { $ } from "../utils/dom.js";
import { products } from "../../data/products.js";
import { ProductCard } from "../components/productCard.js";

export const homeView = () => {
  const featuredProducts = products.slice(0, 8); // First 8 products as featured

  return `
        <div class="home-container">
            <!-- Hero Section -->
            <section class="hero-section">
                <div class="hero-content">
                    <div class="trusted-badge">TRUSTED BY 10k+ CUSTOMERS</div>
                    <h1 class="hero-title">Your trusted online pharmacy for medicines and medical supplies</h1>
                    <p class="hero-description">Get genuine medicines and high-quality medical equipment delivered to your doorstep with Shifaa's professional healthcare network.</p>
                    <div class="hero-actions">
                        <a href="#/products" class="btn btn-primary" data-link>Shop Now</a>
                        <a href="#/categories" class="btn btn-outline" data-link>Browse Categories</a>
                    </div>
                </div>
                <div class="hero-image">
                    <img src="assets/images/hero-sec.png" alt="Pharmacist Illustration">
                </div>
            </section>

            <!-- Features Section (Bento Grid) -->
            <section class="features-section">
            <div>
                <div class="bento-grid">
                    <!-- Tall Card: Licensed Pharmacists -->
                    <div class="bento-card feature-pharmacists">
                        <div class="card-content">
                            <div class="badge-float">
                                <span class="dot"></span> Online Now
                            </div>
                            <h3>Expert Pharmacists</h3>
                            <p>Direct access to certified professionals for your medication questions.</p>
                            
                            <!-- Visual Decoration: Chat Interface -->
                            <div class="chat-visual">
                                <div class="chat-bubble left">
                                    <div class="avatar"></div>
                                    <div class="text-lines">
                                        <span class="line short"></span>
                                        <span class="line long"></span>
                                    </div>
                                </div>
                                <div class="chat-bubble right">
                                    <p>Is this safe to take with...</p>
                                </div>
                                <div class="chat-bubble left">
                                    <div class="avatar"></div>
                                    <p>Yes, absolutely. It's safe...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Wide Card 1: Secure Delivery -->
                    <div class="bento-card feature-delivery">
                        <div class="card-content">
                            <div class="status-indicator">
                                <span class="icon-box">
                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                                </span>
                                <span class="status-text"><strong>On the way</strong> • Arrives Today</span>
                            </div>
                            <div class="text-group">
                                <h3>Fast & Secure Delivery</h3>
                                <p>Temperature controlled logistics ensuring product integrity.</p>
                            </div>
                            <h2 class="big-stat">24/7</h2>
                        </div>
                    </div>

                    <!-- Wide Card 2: Genuine Products -->
                    <div class="bento-card feature-genuine">
                        <div class="card-content">
                            <div class="verified-badge">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="var(--color-accent)" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                <span>Verified Authentic</span>
                            </div>
                            <div class="text-group">
                                <h3>100% Genuine Products</h3>
                                <p>Sourced directly from trusted manufacturers.</p>
                            </div>
                            <div class="bg-gradient-blur"></div>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <!-- Categories Section -->
            <section class="categories-section">
                <div class="section-header">
                    <h2>Featured Categories</h2>
                    <a href="#/categories" class="view-all-link" data-link>View all +</a>
                </div>
                <div class="categories-grid">
                    <div class="category-card">
                        <img src="assets/images/medicines.jpg" alt="Medicines">
                        <div class="category-info">
                            <h3>Medicines</h3>
                            <span>Prescription & OTC</span>
                        </div>
                    </div>
                    <div class="category-card">
                        <div class="category-image-wrapper">
                            <img src="assets/images/medical-devices.jpg" alt="Medical Devices">
                        </div>
                        <div class="category-info">
                            <h3>Medical Devices</h3>
                            <span>Monitoring & Equipment</span>
                        </div>
                    </div>
                    <div class="category-card">
                        <div class="category-image-wrapper">
                             <img src="assets/images/healthcare.jpg" alt="Health & Care">
                        </div>
                        <div class="category-info">
                            <h3>Health & Care</h3>
                            <span>Wellness & Skincare</span>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Best Sellers Section -->
            <section class="best-sellers-section">
                <div class="section-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                    <h2 style="font-size: 2rem; font-weight: 800;">Best Sellers</h2>
                    <div class="carousel-nav">
                        <button class="nav-btn prev" aria-label="Previous">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        <button class="nav-btn next" aria-label="Next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                    </div>
                </div>
                
                
                <div class="products-grid custom-scrollbar">
                    ${featuredProducts.map((p) => ProductCard(p)).join("")}
                </div>
            </section>
        </div>
    `;
};

// Global Event Listeners for Home Interaction
// Check if listener is already attached to avoid duplicates in SPA navigation
if (!window.homeEventsAttached) {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".nav-btn");
    if (!btn) return;

    const grid = document.querySelector(".products-grid");
    if (!grid) return;

    const scrollAmount = 300; // Approx card width + gap

    if (btn.classList.contains("next")) {
      grid.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else if (btn.classList.contains("prev")) {
      grid.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  });
  window.homeEventsAttached = true;
}
