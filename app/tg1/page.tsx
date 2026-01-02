import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'TG 1 - Learning Resources | Ngmsoft',
  description: 'دروس تعليمية شاملة للبرنامج',
};

export default function TG1Page() {
  const learningCards = [
    { number: 1, title: 'فكرة عامة عن البرنامج' },
    { number: 2, title: 'شرح تنزيل البرنامج' },
    { number: 3, title: 'التكويد والبيانات الاساسية' },
    { number: 4, title: 'الفواتير النقدية' },
    { number: 5, title: 'الفواتير والحركات الاجلة' },
    { number: 6, title: 'الباركود والمسلسلات' },
    { number: 7, title: 'التقارير نظرة عامة' },
    { number: 8, title: 'اقفال اليوم' },
    { number: 9, title: 'كيفية البدأ في العمل على البرنامج' },
    { number: 10, title: 'استيراد الاكواد وبداية المدة والتصفير لقاعدة البيانات' },
    { number: 11, title: 'مجموعات الاسعار' },
    { number: 12, title: 'اختصارات البرنامج' },
    { number: 13, title: 'الفرق بين البرنامجين TG & TBS' },
    { number: 14, title: 'الفرق بين البرنامج الحديث والاصدارات القديمة' },
    { number: 15, title: 'المستخدمين' },
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
        <div className={styles.tg1Container}>
          <div className={styles.tg1Header}>
            <h1 className={styles.tg1Title}>TG 1</h1>
            <p className={styles.tg1Subtitle}>دروس تعليمية شاملة للبرنامج</p>
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
