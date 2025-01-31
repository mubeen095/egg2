import { useTranslation } from 'next-i18next'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  const { t } = useTranslation()
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.address}>
          <h3>{t('footer.address')}</h3>
          <p>{t('footer.contact')}</p>
        </div>
        <div className={styles.copyright}>
          <p>© 2024 SC Corporation Limited. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}