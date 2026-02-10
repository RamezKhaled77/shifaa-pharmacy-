import { authService } from "../services/authService.js";
import { toast } from "./toast.js";

/**
 * Premium Auth Modal (Login/Signup)
 * @returns {Promise} Resolves with user object or null
 */
export const authModal = (initialMode = "login") => {
  return new Promise((resolve) => {
    let mode = initialMode; // 'login' or 'signup'

    const overlay = document.createElement("div");
    overlay.className = "modal-overlay auth-modal-overlay";

    const renderContent = () => {
      overlay.innerHTML = `
            <div class="modal-content auth-modal-content">
                <button class="modal-close-btn" aria-label="Close modal">&times;</button>
                
                <div class="auth-header">
                    <h2 class="modal-title">${mode === "login" ? "Welcome Back" : "Create Account"}</h2>
                    <p class="modal-description">${
                      mode === "login"
                        ? "Enter your credentials to access your account."
                        : "Join Shifaa Pharmacy for a better healthcare experience."
                    }</p>
                </div>

                <form id="auth-form" class="auth-form">
                    <div id="auth-error" class="auth-error-message" style="display: none;"></div>
                    ${
                      mode === "signup"
                        ? `
                        <div class="form-group">
                            <label for="auth-name">Full Name</label>
                            <input type="text" id="auth-name" placeholder="John Doe" required>
                        </div>
                    `
                        : ""
                    }
                    <div class="form-group">
                        <label for="auth-email">Email Address</label>
                        <input type="email" id="auth-email" placeholder="name@example.com" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="auth-password">Password</label>
                        <input type="password" id="auth-password" placeholder="••••••••" required>
                    </div>

                    <button type="submit" class="btn-auth-submit">
                        ${mode === "login" ? "Sign In" : "Create Account"}
                    </button>
                </form>

                <div class="auth-footer">
                    <p>
                        ${
                          mode === "login"
                            ? "Don't have an account?"
                            : "Already have an account?"
                        }
                        <button class="btn-toggle-mode">${
                          mode === "login" ? "Sign Up" : "Sign In"
                        }</button>
                    </p>
                </div>
            </div>
        `;

      // Re-attach listeners after re-render
      attachListeners();
    };

    const attachListeners = () => {
      overlay
        .querySelector(".modal-close-btn")
        .addEventListener("click", () => closeModal(null));

      overlay
        .querySelector(".btn-toggle-mode")
        .addEventListener("click", () => {
          mode = mode === "login" ? "signup" : "login";
          renderContent();
        });

      const form = overlay.querySelector("#auth-form");
      const errorEl = overlay.querySelector("#auth-error");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("auth-email").value;
        const password = document.getElementById("auth-password").value;

        try {
          if (mode === "login") {
            authService.login(email, password);
            toast("Welcome back!");
          } else {
            const name = document.getElementById("auth-name").value;
            authService.signup({ name, email, password });
            toast("Account created successfully!");
          }
          closeModal(authService.getUser());
        } catch (err) {
          errorEl.textContent = err.message;
          errorEl.style.display = "block";
          errorEl.classList.add("shake-animation");
          setTimeout(() => errorEl.classList.remove("shake-animation"), 500);
        }
      });
    };

    const closeModal = (result) => {
      overlay.classList.remove("show");
      setTimeout(() => {
        overlay.remove();
        resolve(result);
      }, 300);
    };

    renderContent();
    document.body.appendChild(overlay);
    setTimeout(() => overlay.classList.add("show"), 10);

    // Close on overlay click
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal(null);
    });
  });
};
