import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  const { t } = useTranslation()
  
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img 
          src="/assets/logo.png" 
          alt="SC Corporation Logo" 
          className={styles.logo}
        />
        <div className={styles.titles}>
          <h1>SC Corporation Limited</h1>
          <p>Government of Telangana</p>
        </div>
      </div>

      <nav className={styles.nav}>
        <Link href="/">{t('header.home')}</Link>
        <Link href="/about">{t('header.about')}</Link>
        <Link href="/initiatives">{t('header.initiatives')}</Link>
        <Link href="/order">{t('header.order')}</Link>
        
        <div className={styles.languageSwitcher}>
          <button onClick={() => router.push(router.asPath, undefined, { locale: 'en' })}>EN</button>
          <button onClick={() => router.push(router.asPath, undefined, { locale: 'te' })}>TE</button>
        </div>
      </nav>
    </header>
  )
}