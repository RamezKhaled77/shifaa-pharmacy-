import { router } from "./router.js";
import { appState } from "./state.js";
import { Header, setupHeader } from "./components/header.js";
import { Footer } from "./components/footer.js";
import { $ } from "./utils/dom.js";
import { cartService } from "./services/cartService.js";
import { products } from "../data/products.js";
import { toast } from "./utils/toast.js";

document.addEventListener("DOMContentLoaded", () => {
  // Render Static Components
  $("#main-header").innerHTML = Header();
  $("#main-footer").innerHTML = Footer();

  // Initialize Header Events (Mobile Toggle, Scroll)
  setupHeader();

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

  console.log("Shifaa Pharmacy App Initialized");
});
