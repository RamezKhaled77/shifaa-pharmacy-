import { cartService } from "../services/cartService.js";
import { authService } from "../services/authService.js";
import { appState } from "../state.js";
import { $ } from "../utils/dom.js";
import { authModal } from "../utils/authModal.js";

export const Header = () => {
  const count = cartService.getItemCount();
  const user = authService.getUser();

  return `
        <div class="nav-overlay" id="nav-overlay"></div>
        <nav class="site-header" id="site-header">
            <div class="container header-container">
                <a href="#/" data-link class="logo">
                    Shifaa<span>Pharmacy</span>
                </a>
                
                <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div class="nav-menu" id="nav-menu">
                    <a href="#/" data-link class="nav-link">Home</a>
                    <a href="#/products" data-link data-category="All" class="nav-link">Products</a>
                    <a href="#/about" data-link class="nav-link">About & Contact</a>
                    
                    <div class="nav-divider"></div>

                    <div class="nav-auth-section">
                        ${
                          user
                            ? `
                            <div class="user-profile">
                                <img src="${user.avatar}" alt="${user.name}" class="user-avatar">
                                <span class="user-name">${user.name}</span>
                                <button class="btn-logout" id="btn-logout" title="Logout">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                </button>
                            </div>
                        `
                            : `
                            <button class="btn-login" id="btn-login">Login</button>
                        `
                        }
                    </div>

                    <button href="#/cart" data-link class="nav-link cart-link">
                        <div class="relative">
                            <svg class="cart-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span id="cart-badge" class="cart-badge" style="${
                              count === 0 ? "display: none;" : ""
                            }">${count}</span>
                        </div>
                        Cart
                    </button>
                </div>
            </div>
        </nav>
    `;
};

export const renderHeader = () => {
  const headerWrapper = $("#main-header");
  if (headerWrapper) {
    headerWrapper.innerHTML = Header();
    setupHeader();
  }
};

export const setupHeader = () => {
  const toggle = $("#nav-toggle");
  const menu = $("#nav-menu");
  const overlay = $("#nav-overlay");
  const header = $("#site-header");

  const attachAuthListeners = () => {
    const loginBtn = $("#btn-login");
    if (loginBtn) {
      loginBtn.addEventListener("click", () => {
        authModal("login");
      });
    }

    const logoutBtn = $("#btn-logout");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        authService.logout();
      });
    }
  };

  // Toggle Menu
  const toggleMenu = () => {
    const isOpen = menu.classList.contains("open");
    toggle.classList.toggle("open", !isOpen);
    menu.classList.toggle("open", !isOpen);
    overlay.classList.toggle("open", !isOpen);
    document.body.style.overflow = isOpen ? "" : "hidden";
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

  if (menu) {
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  attachAuthListeners();
};

// Global Scroll Listener (only attached once)
window.addEventListener("scroll", () => {
  const header = $("#site-header");
  if (!header) return;
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
