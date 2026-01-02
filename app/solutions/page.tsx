'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { AnimateOnScroll } from '@/components/ScrollAnimations';
import styles from './page.module.css';

// Dynamic import for Hyperspeed
const Hyperspeed = dynamic(() => import('@/components/Hyperspeed'), { ssr: false });

export default function SolutionsPage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const hyperspeedRef = useRef<HTMLDivElement>(null);

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

  const apps = [
    {
      name: 'NGM App',
      description: 'Enterprise-grade mobile charging solution with multi-device support',
      versions: [
        { name: 'E173', url: 'http://www.ngmsoft.com/ets/NgmCharge420E173/NgmCharge.exe' },
        { name: 'ZTE 2', url: 'http://www.ngmsoft.com/ets/NgmCharge22ZTE626/NgmCharge.exe' },
        { name: 'ZTE 5', url: 'http://www.ngmsoft.com/ets/NgmCharge570ZTE626/NgmCharge.exe' },
        { name: 'ZTE 6 plus', url: 'http://www.ngmsoft.com/ets/NgmCharge600ZTE626/NgmCharge.exe' },
        { name: 'ZTE 6.2 special', url: 'http://www.ngmsoft.com/ets/ngmzte620bory/NgmCharge.exe' },
      ],
    },
    {
      name: 'NGM Etisalat',
      description: 'Specialized solution for Etisalat network devices',
      versions: [
        { name: 'E173', url: 'http://www.ngmsoft.com/ets/iChargeE5.00E173.exe' },
        { name: 'ZTE', url: 'http://www.ngmsoft.com/ets/iChargeE5.00ZTE626.exe' },
      ],
    },
    {
      name: 'NGM Vodafon',
      description: 'Optimized for Vodafone network infrastructure',
      versions: [
        { name: 'K3770', url: 'http://www.ngmsoft.com/out/iChargeV5.00k3770.exe' },
        { name: 'MF626', url: 'http://www.ngmsoft.com/out/iChargeV5.00Mf626.exe' },
      ],
    },
    {
      name: 'TG 5',
      description: 'Advanced management system with comprehensive features',
      featured: true,
      versions: [
        { name: 'TGT', url: 'http://www.ngmsoft.com/release/TgT5.rar' },
        { name: 'TGS', url: 'http://www.ngmsoft.com/release/TgS5.rar' },
        { name: 'TGD', url: 'http://www.ngmsoft.com/release/TgD5.rar' },
        { name: 'TGMT', url: 'http://www.ngmsoft.com/release/TgmT5.rar' },
        { name: 'TGMS', url: 'http://www.ngmsoft.com/release/TgmS5.rar' },
        { name: 'TGMC', url: 'http://www.ngmsoft.com/release/TgmC5.rar' },
        { name: 'TGMD', url: 'http://www.ngmsoft.com/release/TgmD5.rar' },
      ],
    },
  ];

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
        <section className={styles.solutionsHero}>
          {/* Hyperspeed Background */}
          <div className={styles.hyperspeedBackground} ref={hyperspeedRef}>
            <Hyperspeed
              effectOptions={{
                distortion: 'turbulentDistortion',
                length: 400,
                roadWidth: 10,
                islandWidth: 2,
                lanesPerRoad: 4,
                fov: 90,
                fovSpeedUp: 150,
                speedUp: 2,
                carLightsFade: 0.4,
                totalSideLightSticks: 20,
                lightPairsPerRoadWay: 40,
                shoulderLinesWidthPercentage: 0.05,
                brokenLinesWidthPercentage: 0.1,
                brokenLinesLengthPercentage: 0.5,
                lightStickWidth: [0.12, 0.5],
                lightStickHeight: [1.3, 1.7],
                movingAwaySpeed: [60, 80],
                movingCloserSpeed: [-120, -160],
                carLightsLength: [400 * 0.03, 400 * 0.2],
                carLightsRadius: [0.05, 0.14],
                carWidthPercentage: [0.3, 0.5],
                carShiftX: [-0.8, 0.8],
                carFloorSeparation: [0, 5],
                colors: {
                  roadColor: 0x080808,
                  islandColor: 0x0a0a0a,
                  background: 0x000000,
                  shoulderLines: 0xFFFFFF,
                  brokenLines: 0xFFFFFF,
                  leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                  rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                  sticks: 0x03B3C3,
                }
              }}
            />
          </div>

          {/* Hero Content */}
          <div className={styles.heroContent}>
            <h1 className={styles.solutionsTitle}>
              <span className={styles.heroHighlight}>Our</span> Solutions
            </h1>
            <p className={styles.solutionsSubtitle}>
              Download our powerful applications tailored for your business needs.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>16+</span>
                <span className={styles.statLabel}>Applications</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4</span>
                <span className={styles.statLabel}>Product Lines</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Reliable</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.appsGridSection}>
          <div className="container">
            {apps.map((app, idx) => (
              <AnimateOnScroll key={idx} animation="fadeInUp" delay={idx * 0.1}>
                <div className={`${styles.appCard} ${app.featured ? styles.featured : ''}`}>
                  {app.featured && <div className={styles.featuredBadge}>Popular</div>}
                  <div className={styles.appCardHeader}>
                    <div className={styles.appIcon}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {idx === 3 ? (
                          <>
                            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                            <path d="M2 17l10 5 10-5"></path>
                            <path d="M2 12l10 5 10-5"></path>
                          </>
                        ) : idx === 2 ? (
                          <>
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                          </>
                        ) : (
                          <>
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                            <line x1="12" y1="18" x2="12.01" y2="18"></line>
                          </>
                        )}
                      </svg>
                    </div>
                    <h2 className={styles.appTitle}>{app.name}</h2>
                    <p className={styles.appDescription}>{app.description}</p>
                  </div>
                  <div className={styles.appVersionsGrid}>
                    {app.versions.map((version, vIdx) => (
                      <a key={vIdx} href={version.url} className={styles.downloadCard}>
                        <div className={styles.downloadIcon}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                          </svg>
                        </div>
                        <span className={styles.versionName}>{version.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Ngmsoft. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
