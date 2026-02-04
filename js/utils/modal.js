/**
 * Premium Confirmation Modal Utility
 */
export const confirmModal = ({
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
}) => {
  return new Promise((resolve) => {
    // Create elements
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    overlay.innerHTML = `
            <div class="modal-content">
                <div class="modal-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </div>
                <h2 class="modal-title">${title}</h2>
                <p class="modal-description">${message}</p>
                <div class="modal-actions">
                    <button class="btn-modal cancel">${cancelText}</button>
                    <button class="btn-modal confirm">${confirmText}</button>
                </div>
            </div>
        `;

    document.body.appendChild(overlay);

    // Animation in
    setTimeout(() => overlay.classList.add("show"), 10);

    const closeModal = (result) => {
      overlay.classList.remove("show");
      setTimeout(() => {
        overlay.remove();
        resolve(result);
      }, 300);
    };

    // Listeners
    overlay
      .querySelector(".confirm")
      .addEventListener("click", () => closeModal(true));
    overlay
      .querySelector(".cancel")
      .addEventListener("click", () => closeModal(false));

    // Close on overlay click
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal(false);
    });
  });
};
