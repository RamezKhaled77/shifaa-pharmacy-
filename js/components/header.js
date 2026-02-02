import { cartService } from "../services/cartService.js";
import { $ } from "../utils/dom.js";

export const Header = () => {
  const count = cartService.getItemCount();

  return `
        <div class="nav-overlay" id="nav-overlay"></div>
        <nav class="site-header" id="site-header">
            <div class="container header-container">
                <a href="/" data-link class="logo">
                    Shifaa<span>Pharmacy</span>
                </a>
                
                <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div class="nav-menu" id="nav-menu">
                    <a href="/" data-link class="nav-link">Home</a>
                    <a href="/products" data-link class="nav-link">Products</a>
                    <a href="/about" data-link class="nav-link">About Us</a>
                    <button href="/cart" data-link class="nav-link cart-link">
                    <div class="relative">
                    <svg class="cart-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span id="cart-badge" class="cart-badge" style="${count === 0 ? "display: none;" : ""}">${count}</span>
                    </div>
                    Cart
                    </button>
                </div>
            </div>
        </nav>
    `;
};

export const setupHeader = () => {
  const toggle = $("#nav-toggle");
  const menu = $("#nav-menu");
  const overlay = $("#nav-overlay");
  const header = $("#site-header");

  // Toggle Menu
  const toggleMenu = () => {
    const isOpen = menu.classList.contains("open");
    toggle.classList.toggle("open", !isOpen);
    menu.classList.toggle("open", !isOpen);
    overlay.classList.toggle("open", !isOpen);
    document.body.style.overflow = isOpen ? "" : "hidden"; // Prevent scroll when menu open
  };

  // Close Menu
  const closeMenu = () => {
    toggle.classList.remove("open");
    menu.classList.remove("open");
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (toggle) toggle.addEventListener("click", toggleMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);

  // Close on link click
  if (menu) {
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  // Header Scroll Effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Clean up event listeners if needed (not strict here as this is app root)
  return () => {
    if (toggle) toggle.removeEventListener("click", toggleMenu);
  };
};
