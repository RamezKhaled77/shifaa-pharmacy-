import { router } from "./router.js";
import { appState } from "./state.js";
import { Header, setupHeader, renderHeader } from "./components/header.js";
import { Footer } from "./components/footer.js";
import { $ } from "./utils/dom.js";
import { cartService } from "./services/cartService.js";
import { authService } from "./services/authService.js";
import { products } from "../data/products.js";
import { toast } from "./utils/toast.js";
import { setCategory } from "./views/products.js";

document.addEventListener("DOMContentLoaded", () => {
  // Render Initial Components
  renderHeader();
  $("#main-footer").innerHTML = Footer();

  // Handle State Changes for Header
  appState.subscribe(() => {
    renderHeader();
  });

  // Initialize Router
  router.init();

  // Global Add to Cart Handler
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-add-to-cart-full");
    if (btn) {
      const id = parseInt(btn.dataset.id);
      const product = products.find((p) => p.id === id);
      if (product) {
        cartService.addToCart(product);
        toast(`${product.name} added to cart!`);
      }
    }
  });

  // Global Category Filter Handler
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-category]");
    if (el) {
      setCategory(el.dataset.category);
    }
  });

  console.log("Shifaa Pharmacy App Initialized");
});
