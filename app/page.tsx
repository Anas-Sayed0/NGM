'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { AnimateOnScroll, Parallax } from '@/components/ScrollAnimations';
import styles from './page.module.css';

export default function Home() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  // Update body class when sidebar state changes
  useEffect(() => {
    if (isSidebarCollapsed) {
      document.body.classList.add('sidebar-collapsed');
    } else {
      document.body.classList.remove('sidebar-collapsed');
    }

    return () => {
      document.body.classList.remove('sidebar-collapsed');
    };
  }, [isSidebarCollapsed]);

  return (
    <>
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      <Navbar
        onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        isSidebarCollapsed={isSidebarCollapsed}
      />
      <main className={styles.mainContent}>
        <Hero />

        {/* About Section */}
        <section id="about" className={styles.section}>
          <div className="container">
            <AnimateOnScroll animation="fadeInUp">
              <h2 className={styles.sectionTitle}>About Us</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={0.1}>
              <p className={styles.sectionText}>
                Ngmsoft is a leading provider of innovative digital solutions, specializing in
                enterprise software applications and mobile charging solutions. With years of
                experience, we deliver reliable, efficient, and user-friendly software that
                empowers businesses to thrive in the digital age.
              </p>
            </AnimateOnScroll>
            <div className={styles.features}>
              <AnimateOnScroll animation="fadeInUp" delay={0.1}>
                <Parallax speed={-0.3}>
                  <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    <h3>Enterprise Solutions</h3>
                    <p>Comprehensive software solutions for businesses of all sizes</p>
                  </div>
                </Parallax>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInUp" delay={0.2}>
                <Parallax speed={-0.5}>
                  <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                        <line x1="12" y1="18" x2="12.01" y2="18"></line>
                      </svg>
                    </div>
                    <h3>Mobile Applications</h3>
                    <p>Specialized mobile charging and management applications</p>
                  </div>
                </Parallax>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInUp" delay={0.3}>
                <Parallax speed={-0.3}>
                  <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <h3>Reliable Support</h3>
                    <p>24/7 technical support and comprehensive learning resources</p>
                  </div>
                </Parallax>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={styles.section}>
          <div className="container">
            <AnimateOnScroll animation="fadeInUp">
              <h2 className={styles.sectionTitle}>Contact Us</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={0.1}>
              <p className={styles.sectionText}>
                Get in touch with us for support, inquiries, or to learn more about our solutions.
              </p>
            </AnimateOnScroll>
            <div className={styles.contactInfo}>
              <AnimateOnScroll animation="scaleIn" delay={0.1}>
                <div className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <h3>Email</h3>
                  <p>support@ngmsoft.com</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="scaleIn" delay={0.2}>
                <div className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="scaleIn" delay={0.3}>
                <div className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <h3>Location</h3>
                  <p>Cairo, Egypt</p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>

      <AnimateOnScroll animation="fadeIn">
        <footer className="footer">
          <div className="container">
            <p>&copy; 2025 Ngmsoft. All rights reserved.</p>
          </div>
        </footer>
      </AnimateOnScroll>
    </>
  );
}
