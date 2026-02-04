import { homeView } from "./views/home.js";
import { productsView } from "./views/products.js";
import { productDetailsView } from "./views/productDetails.js";
import { cartView } from "./views/cart.js";
import { checkoutView } from "./views/checkout.js";
import { aboutView } from "./views/about.js";
import { $ } from "./utils/dom.js";

const routes = {
  "/": homeView,
  "/products": productsView,
  "/product/:id": productDetailsView,
  "/cart": cartView,
  "/checkout": checkoutView,
  "/about": aboutView,
};

export class Router {
  constructor() {
    // Listen for hash changes (e.g., #/products)
    window.addEventListener("hashchange", () => this.handleRoute());
  }

  navigateTo(path) {
    // Navigate using hash
    window.location.hash = path;
  }

  async handleRoute() {
    // Get path from hash, default to /
    let path = window.location.hash.substring(1) || "/";
    const mainContent = $("#main-content");

    if (!mainContent) return;

    // Support for simple dynamic routes like /product/1
    let view = routes[path];

    // Simple regex for /product/:id
    if (!view && path.startsWith("/product/")) {
      view = routes["/product/:id"];
    }

    if (!view) {
      mainContent.innerHTML = `
        <div class="container" style="text-align:center; padding: 5rem 0;">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for doesn't exist.</p>
            <a href="#/" style="color: var(--color-primary); text-decoration: underline;">Go Home</a>
        </div>
      `;
      return;
    }

    mainContent.innerHTML = await view();

    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  init() {
    this.handleRoute();

    // Intercept clicks on data-link elements
    document.body.addEventListener("click", (e) => {
      const link = e.target.closest("[data-link]");
      if (link) {
        e.preventDefault();
        const href = link.getAttribute("href");
        // Convert /path to #/path if it's not already a hash
        const path = href.startsWith("#") ? href.substring(1) : href;
        this.navigateTo(path);
      }
    });
  }
}

export const router = new Router();
