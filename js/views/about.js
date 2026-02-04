import { Breadcrumbs } from "../components/breadcrumbs.js";

export const aboutView = async () => {
  return `
      <div class="about-page">
          ${Breadcrumbs([{ label: "About & Contact" }])}
          <!-- Hero Section -->
          <section class="about-hero section">
              <div class="container about-hero-container">
                   <div class="about-hero-image">
                      <img src="assets/images/about.jpg" alt="Shifaa Pharmacy Interior">
                  </div>
                  <div class="about-hero-content">
                      <h1 class="hero-title">Restoring Health, <br><span class="highlight-text">Ensuring Trust.</span></h1>
                      <p class="hero-desc">Since our founding, Shifaa has been committed to closing the gap between patients and essential healthcare. Our mission is to provide 100% authentic medicines and state-of-the-art medical equipment delivered with compassion and professional expertise.</p>
                      <div class="hero-badges">
                          <div class="badge-item">
                              <svg class="check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="10" cy="10" r="10" fill="#00E599"/>
                                  <path d="M6 10L9 13L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                              <span>FDA Approved</span>
                          </div>
                          <div class="badge-item">
                              <svg class="check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="10" cy="10" r="10" fill="#00E599"/>
                                  <path d="M6 10L9 13L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                              <span>Licensed Care</span>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
  
          <!-- Core Values -->
          <section class="core-values section">
              <div class="container">
                  <h2 class="section-title">Our Core Values</h2>
                  <p class="section-subtitle">The pillars that define the Shifaa experience.</p>
                  <div class="values-grid">
                      <div class="value-card">
                          <div class="icon-box medicine-icon">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.5 4.5H13.5M4.5 9.5H19.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M16 4.5L19 20.5H5L8 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                          </div>
                          <h3>Certified Medicines</h3>
                          <p>Every product in our inventory is sourced directly from certified global manufacturers and undergoes rigorous quality checks.</p>
                      </div>
                      <div class="value-card">
                          <div class="icon-box pharmacist-icon">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M3 21H21M5 21V7H19V21M12 11H12.01M12 14H12.01M12 17H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                          </div>
                          <h3>Pharmacist Led</h3>
                          <p>Not just a shop—a healthcare hub. Talk to our licensed pharmacists for personalized advice and medication management.</p>
                      </div>
                      <div class="value-card">
                          <div class="icon-box delivery-icon">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <rect x="2" y="7" width="20" height="10" rx="2" stroke="currentColor" stroke-width="2"/>
                              </svg>
                          </div>
                          <h3>Swift Delivery</h3>
                          <p>Doorstep delivery nationwide with specialized temperature-controlled packaging for sensitive medications.</p>
                      </div>
                  </div>
              </div>
          </section>
  
          <!-- Contact Section -->
          <section class="contact-section section">
              <div class="container">
                  <div class="contact-layout">
                      <!-- Left: Info -->
                      <div class="contact-info">
                          <h2 class="contact-title">Get in Touch</h2>
                           <p class="contact-subtitle">Have a question about your prescription or a piece of equipment? Reach out to our 24/7 support team.</p>
                           
                           <div class="info-grid">
                              <div class="info-item">
                                  <span class="info-label">PHONE</span>
                                  <p>+1 (800) SHIFAA-01</p>
                              </div>
                              <div class="info-item">
                                  <span class="info-label">EMAIL</span>
                                  <p>care@shifaa-pharmacy.com</p>
                              </div>
                              <div class="info-item">
                                  <span class="info-label">ADDRESS</span>
                                  <p>123 Health Plaza, Medical District, NY</p>
                              </div>
                              <div class="info-item">
                                  <span class="info-label">HOURS</span>
                                  <p>Mon - Sat: 8am - 10pm</p>
                              </div>
                           </div>
                           
                           <div class="map-container">
                              <img src="assets/images/map-placeholder.png" alt="Location Map" class="map-image">
                              <div class="map-overlay-pin">
                                  <div class="pin-marker"></div>
                                  <span>Location: Medical District, NY</span>
                              </div>
                           </div>
                      </div>
  
                      <!-- Right: Form -->
                      <div class="contact-form-wrapper">
                          <h3>Send us a Message</h3>
                          <form id="contact-form" onsubmit="event.preventDefault(); console.log('Message Sent');">
                              <div class="form-group">
                                  <label for="fullname">Full Name</label>
                                  <input type="text" id="fullname" placeholder="John Doe" class="form-input">
                              </div>
                               <div class="form-group">
                                  <label for="email">Email Address</label>
                                  <input type="email" id="email" placeholder="john@example.com" class="form-input">
                              </div>
                               <div class="form-group">
                                  <label for="inquiry">Inquiry Type</label>
                                  <div class="select-wrapper">
                                    <select id="inquiry" class="form-input form-select">
                                        <option>General Inquiry</option>
                                        <option>Order Status</option>
                                        <option>Pharmacist Consultation</option>
                                    </select>
                                  </div>
                              </div>
                               <div class="form-group">
                                  <label for="message">Message</label>
                                  <textarea id="message" rows="4" placeholder="How can we help you today?" class="form-input"></textarea>
                              </div>
                              <button type="submit" class="btn-submit">
                                <span>Send Message</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                  <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2"/>
                                </svg>
                              </button>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  `;
};
