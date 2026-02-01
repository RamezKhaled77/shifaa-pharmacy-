
export const Footer = () => {
    return `
        <div class="container" style="padding: 2rem 0; border-top: 1px solid var(--border-color); margin-top: 4rem;">
            <div class="grid grid-cols-3">
                <div>
                    <h3 style="margin-bottom: 1rem;">Shifaa Pharmacy</h3>
                    <p style="color: var(--text-muted);">Your trusted partner for health and wellness.</p>
                </div>
                <div>
                    <h4 style="margin-bottom: 1rem;">Quick Links</h4>
                    <ul style="list-style: none;">
                        <li><a href="/" data-link>Home</a></li>
                        <li><a href="/products" data-link>Products</a></li>
                        <li><a href="/about" data-link>About Us</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style="margin-bottom: 1rem;">Contact</h4>
                    <p style="color: var(--text-muted);">support@shifaapharmacy.com</p>
                    <p style="color: var(--text-muted);">+1 (555) 123-4567</p>
                </div>
            </div>
            <div style="text-align: center; margin-top: 2rem; color: var(--text-muted); font-size: 0.875rem;">
                &copy; 2026 Shifaa Pharmacy. All rights reserved.
            </div>
        </div>
    `;
};
