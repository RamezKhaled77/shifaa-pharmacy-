export const ProductCard = (product) => {
  return `
        <div class="product-card">
            <a href="#/product/${product.id}" data-link class="product-card-link">
                <div class="product-image-wrapper">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                </div>
                <div class="product-content">
                    <div class="product-category">${product.category || "Healthcare"}</div>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description || ""}</p>
                    
                    <div class="product-meta-row">
                        <span class="product-price">$${product.price.toFixed(2)}</span>
                        <div class="product-rating-badge">
                            <span class="star-icon">★</span>
                            <span class="rating-val">${product.rating || 4.5}</span>
                        </div>
                    </div>
                </div>
            </a>
            <div class="product-card-footer">
                <button class="btn-add-to-cart-full" data-id="${product.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    Add to Cart
                </button>
            </div>
        </div>
    `;
};
