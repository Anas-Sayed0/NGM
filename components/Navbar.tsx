'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

interface NavbarProps {
  showSidebarToggle?: boolean;
  onToggleSidebar?: () => void;
  isSidebarCollapsed?: boolean;
}

export default function Navbar({ showSidebarToggle = true, onToggleSidebar, isSidebarCollapsed = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close menu on window resize (when switching to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="navbar">
      <div className={styles.navbarContainer}>
        {showSidebarToggle && onToggleSidebar && (
          <button
            className={styles.sidebarToggleBtn}
            onClick={onToggleSidebar}
            aria-label="Toggle sidebar"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        )}
        <Link href="/" className={styles.navbarLogo}>
          <span>Ngmsoft</span>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className={`${styles.mobileMenuBtn} ${mobileMenuOpen ? styles.active : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Navigation Menu */}
        <ul className={`${styles.navbarMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <li><Link href="/" className={styles.navbarLink} onClick={closeMobileMenu}>Home</Link></li>
          <li><Link href="/#about" className={styles.navbarLink} onClick={closeMobileMenu}>About</Link></li>
          <li><Link href="/#contact" className={styles.navbarLink} onClick={closeMobileMenu}>Contact</Link></li>
        </ul>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenuOverlay} onClick={closeMobileMenu}></div>
        )}
      </div>
    </nav>
  );
}
