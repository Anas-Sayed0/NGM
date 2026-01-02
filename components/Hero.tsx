'use client';

import { useRef } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
import dynamic from 'next/dynamic';

// Dynamic import to avoid SSR issues with Three.js
const Hyperspeed = dynamic(() => import('./Hyperspeed'), { ssr: false });

export default function Hero() {
  const hyperspeedRef = useRef<HTMLDivElement>(null);

  const triggerSpeedUp = () => {
    if (hyperspeedRef.current) {
      const container = hyperspeedRef.current.querySelector('#lights');
      if (container) {
        container.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
      }
    }
  };

  const triggerSlowDown = () => {
    if (hyperspeedRef.current) {
      const container = hyperspeedRef.current.querySelector('#lights');
      if (container) {
        container.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
      }
    }
  };

  return (
    <section className={styles.hero}>
      {/* Hyperspeed Background */}
      <div className={styles.hyperspeedBackground} ref={hyperspeedRef}>
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
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

      {/* Content Overlay */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroHighlight}>NGM</span>SOFT
        </h1>
        <p className={styles.heroSubtitle}>
          Innovating Digital Solutions for Tomorrow
        </p>
        <Link
          href="/solutions"
          className={styles.heroCta}
          onMouseEnter={triggerSpeedUp}
          onMouseLeave={triggerSlowDown}
        >
          Check Our Solutions
        </Link>
      </div>
    </section>
  );
}
