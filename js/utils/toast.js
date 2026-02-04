/**
 * Premium Notification Utility (Toast)
 */
export const toast = (message, type = "success", duration = 3000) => {
  // Create container if it doesn't exist
  let container = document.querySelector(".notification-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "notification-container";
    document.body.appendChild(container);
  }

  // Create toast element
  const toastEl = document.createElement("div");
  toastEl.className = `toast ${type}`;

  // Icon based on type
  let icon = "";
  if (type === "success") {
    icon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  } else if (type === "info") {
    icon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  }

  toastEl.innerHTML = `
        <div class="toast-icon">${icon}</div>
        <div class="toast-content">
            <p class="toast-message">${message}</p>
        </div>
        <button class="toast-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div class="toast-progress" style="animation-duration: ${duration}ms"></div>
    `;

  container.appendChild(toastEl);

  // Show toast
  setTimeout(() => toastEl.classList.add("show"), 10);

  // Remove logic
  const removeToast = () => {
    toastEl.classList.remove("show");
    setTimeout(() => toastEl.remove(), 400); // Wait for transition
  };

  // Auto remove
  const timeoutId = setTimeout(removeToast, duration);

  // Manual close
  toastEl.querySelector(".toast-close").addEventListener("click", () => {
    clearTimeout(timeoutId);
    removeToast();
  });
};
