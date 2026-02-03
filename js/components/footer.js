export const Footer = () => {
  return `
        <div class="footer-dark">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-brand-col">
                        <div class="footer-logo">
                            <span class="logo-text">Shifaa</span><span class="logo-accent">Pharmacy</span>
                        </div>
                        <p class="footer-desc">Your trusted partner for health and wellness. Premium medicines and expert care delivered to your doorstep.</p>
                        <div class="social-links">
                            <a href="#" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                            <a href="#" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                            <a href="#" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                        </div>
                    </div>
                    
                    <div class="footer-col">
                        <h4>Shop</h4>
                        <ul>
                            <li><a href="/medicines" data-link>Medicines</a></li>
                            <li><a href="/devices" data-link>Medical Devices</a></li>
                            <li><a href="/personal-care" data-link>Personal Care</a></li>
                            <li><a href="/supplements" data-link>Supplements</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="/about" data-link>About Us</a></li>
                            <li><a href="/careers" data-link>Careers</a></li>
                            <li><a href="/blog" data-link>Health Blog</a></li>
                            <li><a href="/contact" data-link>Contact</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="/faq" data-link>FAQs</a></li>
                            <li><a href="/shipping" data-link>Shipping Policy</a></li>
                            <li><a href="/returns" data-link>Returns</a></li>
                            <li><a href="/privacy" data-link>Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; 2026 Shifaa Pharmacy. All rights reserved.</p>
                    <div class="payment-icons">
                        <!-- Simple text or fake icons -->
                        <span>VISA</span> <span>Mastercard</span> <span>PayPal</span>
                    </div>
                </div>
            </div>
        </div>
    `;
};
