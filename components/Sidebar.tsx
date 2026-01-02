'use client';

import { useState } from 'react';
import styles from './Sidebar.module.css';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());
  const [openApps, setOpenApps] = useState<Set<string>>(new Set());

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const toggleApp = (appId: string) => {
    setOpenApps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(appId)) {
        newSet.delete(appId);
      } else {
        newSet.add(appId);
      }
      return newSet;
    });
  };

  return (
    <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`} id="sidebar">
      <div className={styles.sidebarHeader}>
        <h3>Resources</h3>
        <button
          className={styles.sidebarClose}
          onClick={onToggle}
          aria-label="Close sidebar"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Apps Section */}
      <div className={styles.sidebarSection}>
        <button
          className={`${styles.sectionToggle} ${openSections.has('apps') ? styles.active : ''}`}
          onClick={() => toggleSection('apps')}
        >
          <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <span>Apps</span>
          <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div className={`${styles.sectionContent} ${openSections.has('apps') ? styles.active : ''}`}>
          {/* NGM App */}
          <div className={styles.appItem}>
            <button
              className={`${styles.appToggle} ${openApps.has('ngm-app') ? styles.active : ''}`}
              onClick={() => toggleApp('ngm-app')}
            >
              <svg className={styles.iconSmall} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
              <span>NGM App</span>
              <svg className={styles.chevronSmall} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`${styles.appVersions} ${openApps.has('ngm-app') ? styles.active : ''}`}>
              <a href="http://www.ngmsoft.com/ets/NgmCharge420E173/NgmCharge.exe" className={styles.versionLink}>
                <span>E173</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
              <a href="http://www.ngmsoft.com/ets/NgmCharge22ZTE626/NgmCharge.exe" className={styles.versionLink}>
                <span>ZTE 2</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
              <a href="http://www.ngmsoft.com/ets/NgmCharge570ZTE626/NgmCharge.exe" className={styles.versionLink}>
                <span>ZTE 5</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
              <a href="http://www.ngmsoft.com/ets/NgmCharge600ZTE626/NgmCharge.exe" className={styles.versionLink}>
                <span>ZTE 6 plus</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
              <a href="http://www.ngmsoft.com/ets/ngmzte620bory/NgmCharge.exe" className={styles.versionLink}>
                <span>ZTE 6.2 special</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* NGM Etisalat */}
          <div className={styles.appItem}>
            <button
              className={`${styles.appToggle} ${openApps.has('ngm-etisalat') ? styles.active : ''}`}
              onClick={() => toggleApp('ngm-etisalat')}
            >
              <svg className={styles.iconSmall} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
              <span>NGM Etisalat</span>
              <svg className={styles.chevronSmall} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`${styles.appVersions} ${openApps.has('ngm-etisalat') ? styles.active : ''}`}>
              <a href="http://www.ngmsoft.com/ets/iChargeE5.00E173.exe" className={styles.versionLink}>
                <span>E173</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
              <a href="http://www.ngmsoft.com/ets/iChargeE5.00ZTE626.exe" className={styles.versionLink}>
                <span>ZTE</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* NGM Vodafon */}
          <div className={styles.appItem}>
            <button
              className={`${styles.appToggle} ${openApps.has('ngm-vodafon') ? styles.active : ''}`}
              onClick={() => toggleApp('ngm-vodafon')}
            >
              <svg className={styles.iconSmall} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
              <span>NGM Vodafon</span>
              <svg className={styles.chevronSmall} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`${styles.appVersions} ${openApps.has('ngm-vodafon') ? styles.active : ''}`}>
              <a href="http://www.ngmsoft.com/out/iChargeV5.00k3770.exe" className={styles.versionLink}>
                <span>k3770</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
              <a href="http://www.ngmsoft.com/out/iChargeV5.00Mf626.exe" className={styles.versionLink}>
                <span>MF626</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* TG 5 */}
          <div className={styles.appItem}>
            <button
              className={`${styles.appToggle} ${openApps.has('tg5') ? styles.active : ''}`}
              onClick={() => toggleApp('tg5')}
            >
              <svg className={styles.iconSmall} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <span>TG 5</span>
              <svg className={styles.chevronSmall} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`${styles.appVersions} ${openApps.has('tg5') ? styles.active : ''}`}>
              {['TGT', 'TGS', 'TGD', 'TGMT', 'TGMS', 'TGMC', 'TGMD'].map((version) => (
                <a key={version} href={`http://www.ngmsoft.com/release/Tg${version === 'TGT' ? 'T' : version === 'TGS' ? 'S' : version === 'TGD' ? 'D' : 'm' + version.slice(2)}5.rar`} className={styles.versionLink}>
                  <span>{version}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Setup Files Section */}
      <div className={styles.sidebarSection}>
        <button
          className={`${styles.sectionToggle} ${openSections.has('setup') ? styles.active : ''}`}
          onClick={() => toggleSection('setup')}
        >
          <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>Setup Files</span>
          <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div className={`${styles.sectionContent} ${openSections.has('setup') ? styles.active : ''}`}>
          <a href="http://www.ngmsoft.com/res7/setuptg.rar" className={styles.resourceLink}>
            <span>files 1</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
          <a href="http://www.ngmsoft.com/res7/setupnet.rar" className={styles.resourceLink}>
            <span>files 2</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
          <a href="#" className={styles.resourceLink}>
            <span>files 3</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        </div>
      </div>

      {/* Learning Links Section */}
      <div className={styles.sidebarSection}>
        <button
          className={`${styles.sectionToggle} ${openSections.has('learning') ? styles.active : ''}`}
          onClick={() => toggleSection('learning')}
        >
          <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Learning Links</span>
          <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div className={`${styles.sectionContent} ${openSections.has('learning') ? styles.active : ''}`}>
          {/* Category 1 */}
          <div className={styles.appItem}>
            <button
              className={`${styles.appToggle} ${openApps.has('learning-cat1') ? styles.active : ''}`}
              onClick={() => toggleApp('learning-cat1')}
            >
              <svg className={styles.iconSmall} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
              <span>الجديد بالأصدار الخامس</span>
              <svg className={styles.chevronSmall} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`${styles.appVersions} ${openApps.has('learning-cat1') ? styles.active : ''}`}>
              <a href="https://www.youtube.com/watch?v=qlFA5lJXxCI&list=PLeyn2O1-tI7N-ObFf0Wp9hMX3XQ6nkeGk" target="_blank" rel="noopener noreferrer" className={styles.versionLink}>
                <span>TG 5</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
              <a href="https://www.youtube.com/watch?v=-juR15qBzuo&list=PLeyn2O1-tI7PIv7rH1abgQ35tF2hfzmFD" target="_blank" rel="noopener noreferrer" className={styles.versionLink}>
                <span>TGM 5</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* Category 2 */}
          <div className={styles.appItem}>
            <button
              className={`${styles.appToggle} ${openApps.has('learning-cat2') ? styles.active : ''}`}
              onClick={() => toggleApp('learning-cat2')}
            >
              <svg className={styles.iconSmall} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
              <span>الجديد بالأصدار الرابع</span>
              <svg className={styles.chevronSmall} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`${styles.appVersions} ${openApps.has('learning-cat2') ? styles.active : ''}`}>
              {[
                { label: 'الجديد في الطباعه', href: 'https://roadmap.sh' },
                { label: 'الجديد في الباركود', href: 'https://www.w3schools.com' },
                { label: 'الجديد في التحكم بالاسعار', href: 'https://css-tricks.com' },
                { label: 'الجديد في عروض الاسعار', href: 'https://github.com' },
                { label: 'مندوبين المبيعات', href: 'https://github.com' },
                { label: 'الجديد في التقارير', href: 'https://github.com' },
                { label: 'طرق مختلفه لادخال الفواتير', href: 'https://github.com' },
                { label: 'المستخدمين', href: 'https://github.com' },
                { label: 'بعض المميزات الجديده', href: 'https://github.com' },
                { label: 'الشبكات', href: 'https://github.com' },
                { label: 'المسلسلات', href: 'https://github.com' },
              ].map((item, idx) => (
                <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className={styles.versionLink}>
                  <span>{item.label}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* الدعم الفني بالفيديو */}
          <div className={styles.appItem}>
            <button
              className={`${styles.appToggle} ${openApps.has('tech-support-video') ? styles.active : ''}`}
              onClick={() => toggleApp('tech-support-video')}
            >
              <svg className={styles.iconSmall} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
              <span>الدعم الفني بالفيديو</span>
              <svg className={styles.chevronSmall} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`${styles.appVersions} ${openApps.has('tech-support-video') ? styles.active : ''}`}>
              {[
                { label: 'تعريف اللغة العربية في نجم المبيعات', href: '#' },
                { label: 'تعديل الحافة عرض القوائم ضل التيمن بنجم المبيعات', href: '#' },
                { label: 'التعامل حين فقد ملفات من محلل نجم المبيعات لتجيب فقد البيانات', href: '#' },
                { label: 'الاجراءات المطلوب اتباعها عند تغيير الويندوز للمحافظة علي بيانات نجم المبيعات', href: '#' },
                { label: 'طرق النسخ الاحتياطي واسترجاع بيانات بيوم معين', href: '#' },
                { label: 'استيراد البيانات من الاصدارات القديمة', href: '#' },
              ].map((item, idx) => (
                <a key={idx} href={item.href} className={styles.versionLink}>
                  <span>{item.label}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* تعليم نجم المبيعات */}
          <div className={styles.appItem}>
            <button
              className={`${styles.appToggle} ${openApps.has('learning-sales-star') ? styles.active : ''}`}
              onClick={() => toggleApp('learning-sales-star')}
            >
              <svg className={styles.iconSmall} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>تعليم نجم المبيعات</span>
              <svg className={styles.chevronSmall} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`${styles.appVersions} ${openApps.has('learning-sales-star') ? styles.active : ''}`}>
              <a href="/tccms" className={styles.versionLink}>
                <span>TCCMS</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
              <a href="/tg1" className={styles.versionLink}>
                <span>TG 1</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
              <a href="/tgm1" className={styles.versionLink}>
                <span>TGM 1</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
