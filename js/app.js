import { router } from "./router.js";
import { appState } from "./state.js";
import { Header, setupHeader } from "./components/header.js";
import { Footer } from "./components/footer.js";
import { $ } from "./utils/dom.js";

document.addEventListener("DOMContentLoaded", () => {
  // Render Static Components
  $("#main-header").innerHTML = Header();
  $("#main-footer").innerHTML = Footer();

  // Initialize Header Events (Mobile Toggle, Scroll)
  setupHeader();

  // Initialize Router
  router.init();

  console.log("Shifaa Pharmacy App Initialized");
});
