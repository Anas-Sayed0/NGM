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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        <ul className={styles.navbarMenu}>
          <li><Link href="/" className={styles.navbarLink}>Home</Link></li>
          <li><Link href="/#about" className={styles.navbarLink}>About</Link></li>
          <li><Link href="/#contact" className={styles.navbarLink}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
