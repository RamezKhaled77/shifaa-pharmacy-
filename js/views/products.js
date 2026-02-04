import { products } from "../../data/products.js";
import { ProductCard } from "../components/productCard.js";
import { $ } from "../utils/dom.js";

let currentCategory = "All";
let searchQuery = "";

export const productsView = async () => {
  // Get unique categories
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // Filter products based on current state
  const filterAndRender = () => {
    const filtered = products.filter((p) => {
      const matchesCategory =
        currentCategory === "All" || p.category === currentCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    const grid = $("#products-grid");
    if (grid) {
      if (filtered.length === 0) {
        grid.innerHTML = `
                    <div class="no-results">
                        <h3>No products found</h3>
                        <p>Try adjusting your search or filters to find what you're looking for.</p>
                    </div>
                `;
      } else {
        grid.innerHTML = filtered.map((p) => ProductCard(p)).join("");
      }
    }

    const countEl = $("#results-count");
    if (countEl) countEl.textContent = filtered.length;
  };

  // Attach listeners after a short delay to ensure DOM is ready
  // This is a workaround for the simple router implementation
  setTimeout(() => {
    const searchInput = $("#product-search");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        filterAndRender();
      });
    }

    const tabs = document.querySelectorAll(".filter-tab");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        currentCategory = tab.dataset.category;
        filterAndRender();
      });
    });
  }, 100);

  return `
        <div class="products-page">
            <header class="products-page-header">
                <div class="container">
                    <h1>Our Medicines & Supplies</h1>
                    <div class="products-controls">
                        <div class="search-container">
                            <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input type="text" id="product-search" class="search-input" placeholder="Search by medicine name or brand..." value="${searchQuery}">
                        </div>
                        
                        <div class="filter-tabs">
                            ${categories
                              .map(
                                (cat) => `
                                <button class="filter-tab ${currentCategory === cat ? "active" : ""}" data-category="${cat}">
                                    ${cat}
                                </button>
                            `,
                              )
                              .join("")}
                        </div>
                    </div>
                </div>
            </header>

            <div class="container">
                <div class="products-results-info">
                    Showing <span id="results-count">${products.length}</span> products
                </div>
                <div class="grid grid-cols-4" id="products-grid">
                    ${products.map((p) => ProductCard(p)).join("")}
                </div>
            </div>
        </div>
    `;
};
