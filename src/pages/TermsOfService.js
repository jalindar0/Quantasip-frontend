import React from 'react';
import styles from './TermsOfService.module.css';

function TermsOfService() {
  // Placeholder for form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted (placeholder)');
  };

  return (
    <div className={styles.termsOfServicePage}>
      <div className={styles.mainContent}>
        {/* Hero Section with Slideshow */}
        <section className={styles.heroSection}>
          <div className={styles.heroBg} style={{backgroundImage: 'url(https://quantasip.com/wp-content/uploads/2024/08/isometric-view-3d-rendering-neon-city-scaled.jpg)'}}></div>
          <div className={styles.heroContent}>
            <h1>Terms of Service</h1>
            <h5 className={styles.heroSubtitle}>By accessing and using this GIS portfolio website, you agree to comply with and be bound by the following terms and conditions ("Terms of Service"). If you do not agree to these Terms of Service, please refrain from using our Website.</h5>
            <a href="#scroll-down" className={styles.scrollDown}>
              <svg aria-hidden="true" viewBox="0 0 512 512" width="40" height="40"><path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z" fill="#fff"/></svg>
            </a>
          </div>
        </section>

        {/* Terms Sections */}
        <section className={styles.termsSection}>
          <h2>Intellectual Property</h2>
          <p>All content and materials on this Website, including text, images, graphics, logos, and software, are protected by intellectual property laws and are the property of QuantaSIP or its licensors. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.</p>
        </section>
        <section className={styles.termsSection}>
          <h2>User Conduct</h2>
          <p>When using our Website, you agree to:</p>
          <ul>
            <li>Comply with all applicable laws and regulations.</li>
            <li>Respect the intellectual property rights of others.</li>
            <li>Refrain from engaging in any activity that may disrupt or interfere with the functioning of our Website or compromise its security.</li>
          </ul>
        </section>
        <section className={styles.termsSection}>
          <h2>Use of Geographic Information</h2>
          <p>The GIS-related information and data displayed on this Website are for informational purposes only. While we strive to provide accurate and up-to-date information, we do not warrant the completeness, reliability, or accuracy of any content. Your use of the information is at your own risk.</p>
        </section>
        <section className={styles.termsSection}>
          <h2>Third-Party Websites and Services</h2>
          <p>Our Website may contain links to third-party websites and services that are not owned or controlled by QuantaSIP. We assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. Accessing these websites or using these services is at your own risk.</p>
        </section>
        <section className={styles.termsSection}>
          <h2>Disclaimer of Warranties</h2>
          <p>We provide our Website on an "as is" and "as available" basis without any warranties, whether expressed or implied. We disclaim any warranties, including but not limited to merchantability, fitness for a particular purpose, or non-infringement. Your use of the Website is at your own risk.</p>
        </section>
        <section className={styles.termsSection}>
          <h2>Limitation of Liability</h2>
          <p>In no event shall QuantaSIP or its affiliates, partners, or employees be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use or inability to use our Website. This includes but is not limited to damages for loss of profits, data, or other intangible losses.</p>
        </section>
        <section className={styles.termsSection}>
          <h2>Modifications to the Terms of Service</h2>
          <p>We reserve the right to modify or update these Terms of Service at any time without prior notice. It is your responsibility to review these Terms of Service periodically. Continued use of our Website after any modifications indicates your acceptance of the updated Terms of Service.</p>
        </section>
        <section className={styles.termsSection}>
          <h2>Governing Law and Jurisdiction</h2>
          <p>These Terms of Service shall be governed by and construed in accordance with the laws of Maharashtra. Any disputes arising from these Terms of Service or your use of our Website shall be subject to the exclusive jurisdiction of the courts in Maharashtra.</p>
        </section>
        <section className={styles.termsSection}>
          <h2>Severability</h2>
          <p>If any provision of these Terms of Service is deemed invalid or unenforceable, the remaining provisions shall remain in effect. The invalid or unenforceable provision will be replaced with a valid, enforceable provision that most closely matches the original intent of the provision.</p>
        </section>
        <section className={styles.termsSection}>
          <h2>Contact Us</h2>
          <p>If you have any questions or concerns regarding these Terms of Service, please contact us – <a href="/contact-us" style={{color:'#252525', textDecoration:'underline'}}>Contact Page</a></p>
        </section>

        {/* Get in Touch Section */}
        <section className={styles.getInTouchSection}>
          <h3>Get in Touch</h3>
          <h5>Connect with us today for tailored GIS solutions and expert support for your infrastructure projects.</h5>
          {/* Lottie animation placeholder */}
          <img src="https://www.gravatar.com/avatar/?d=mp&s=120" alt="Default profile" style={{borderRadius: '50%', width: 120, height: 120, margin: '0 auto 32px auto', display: 'block', background: '#e0e7ef'}} />
          {/* Contact Form */}
          <form className={styles.contactForm} onSubmit={handleFormSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="form-field-name">Full Name</label>
              <input type="text" id="form-field-name" name="name" placeholder="Enter your full name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="form-field-email">Email</label>
              <input type="email" id="form-field-email" name="email" placeholder="Enter your email address" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="form-field-phone">Phone Number</label>
              <input type="tel" id="form-field-phone" name="phone" placeholder="Enter your phone number" required pattern="[0-9()#&+*-=.]+" title="Only numbers and phone characters (#, -, *, etc) are accepted." />
            </div>
            <div className={styles.formGroup}>
              <label>Services Interested In</label>
              <div className={styles.checkboxGroup}>
                <label><input type="checkbox" name="services" value="Cadastral Datasets" /> Cadastral Datasets</label>
                <label><input type="checkbox" name="services" value="Land Record Verification" /> Land Record Verification</label>
                <label><input type="checkbox" name="services" value="Data Cleaning" /> Data Cleaning</label>
                <label><input type="checkbox" name="services" value="Data Correction" /> Data Correction</label>
                <label><input type="checkbox" name="services" value="Others" /> Others</label>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="form-field-message">Message</label>
              <textarea id="form-field-message" name="message" placeholder="Describe your project or any specific requests"></textarea>
            </div>
            {/* Recaptcha placeholder */}
            <div className={styles.formGroup}>
              <div className={styles.recaptchaPlaceholder}>[reCAPTCHA]</div>
            </div>
            <button type="submit" className={styles.submitButton}>Send</button>
          </form>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>© QuantaSip Pvt. Ltd. 2023</p>
        </footer>
      </div>
    </div>
  );
}

export default TermsOfService; 