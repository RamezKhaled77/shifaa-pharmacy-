# Shifaa Pharmacy - Premium E-commerce SPA

![Shifaa Pharmacy Banner](assets/images/hero-sec.png)

Shifaa Pharmacy is a sophisticated, high-performance Single Page Application (SPA) built entirely with **Vanilla JavaScript, HTML5, and Modern CSS3**. It provides a premium healthcare shopping experience with a focus on speed, aesthetics, and user-centric features.

## Key Features

### Advanced Shopping Experience

- **Real-time Product Filtering**: Browse through diverse categories (Medicines, Medical Devices, Health & Care) with instant category filtering.
- **Universal Search**: Quickly find healthcare products via a powerful, responsive search interface.
- **Dynamic Cart System**: Seamlessly add, remove, and adjust quantities with persistent state.

### Simulated Authentication & Security

- **LocalStorage Database**: A persistent "fake" backend that stores registered users in the browser's local storage.
- **Secure Sessions**: User sessions are persisted across refreshes, ensuring a smooth return-user experience.
- **Premium Auth UI**: Integrated Login/Signup modal with real-time validation feedback and shake animations.

### Seamless Checkout Flow

- **Glassmorphism Checkout Modal**: A sleek, focused interface for collecting delivery information without navigating away from the cart.
- **Order Simulation**: Calculates real-time totals, taxes, and provides a success state upon completion.

### Design & UI/UX

- **SPA Architecture**: Lightning-fast navigation using a custom-built client-side router (no page reloads).
- **Responsive Design**: Fluid layouts that provide a premium experience on desktop, tablet, and mobile.
- **Modern Aesthetics**: Uses Glassmorphism, CSS variables for design tokens, and smooth micro-animations.

## Tech Stack

- **Core**: Vanilla JavaScript (ES6+)
- **Styling**: Vanilla CSS3 (Custom Design System with Variables)
- **Routing**: Custom Hash-based SPA Router
- **State Management**: Reactive Observer Pattern (State Manager)
- **Storage**: Browser LocalStorage for persistence

## Project Structure

```bash
├── assets/             # Images, Icons, and Logos
├── css/                # Modular Styling (header, home, modal, etc.)
├── data/               # Mock data (Products, Categories)
├── js/
│   ├── components/     # Reusable UI components (Header, Footer)
│   ├── services/       # Business logic (Cart, Auth, Storage)
│   ├── utils/          # Helper utilities (DOM, Modals, Toasts)
│   ├── views/          # Page views/templates
│   ├── app.js          # Main entry point
│   ├── router.js       # SPA Route definitions
│   └── state.js        # Global State Manager
└── index.html          # Main HTML entry
```

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RamezKhaled77/shifaa-pharmacy-.git
   ```
2. **Open the project:**
   Simply open `index.html` in your browser or use a Live Server extension in VS Code for the best experience.

3. **No Build Step Required**:
   Since this is a Vanilla JS project, no `npm install` or build process is needed. It runs natively in all modern browsers.

## Future Improvements

- [ ] Integration with a real payment gateway (Stripe/PayPal).
- [ ] Backend integration with Node.js/Express.
- [ ] Order history and user account dashboard.
- [ ] Dark mode support.

---

_Crafted with ❤️ for a better healthcare experience._
