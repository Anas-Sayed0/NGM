import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'TCCMS - Learning Resources | Ngmsoft',
  description: 'دروس تعليمية شاملة للبرنامج',
};

export default function TCCMSPage() {
  const learningCards = [
    { number: 1, title: 'مقدمة عن البرنامج' },
    { number: 2, title: 'تنزيل البرنامج' },
    { number: 3, title: 'نظرة عامة عن البرنامج' },
    { number: 4, title: 'التكويد جزء 1' },
    { number: 5, title: 'التكويد جزء 2' },
    { number: 6, title: 'الفواتير النقدية جزء 1' },
    { number: 7, title: 'الفواتير النقدية جزء 2' },
    { number: 8, title: 'الفواتير الاجلة' },
    { number: 9, title: 'اقفال اليوم' },
    { number: 10, title: 'ادخال الارصدة الافتتاحية - اولي المدة' },
    { number: 11, title: 'الفرق بين الاصدارين 14 و 16' },
  ];

  return (
    <div lang="ar" dir="rtl">
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <Link href="/" className={styles.backButton}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            العودة للرئيسية
          </Link>
          <div className={styles.navbarLogo}>
            <span>Ngmsoft</span>
          </div>
        </div>
      </nav>

      <main className={styles.mainContent}>
        <div className={styles.tccmsContainer}>
          <div className={styles.tccmsHeader}>
            <h1 className={styles.tccmsTitle}>TCCMS</h1>
            <p className={styles.tccmsSubtitle}>دروس تعليمية شاملة للبرنامج</p>
          </div>

          <div className={styles.cardsGrid}>
            {learningCards.map((card) => (
              <a key={card.number} href="#" className={styles.learningCard}>
                <span className={styles.cardNumber}>{card.number}</span>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Ngmsoft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
