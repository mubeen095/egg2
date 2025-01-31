import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <h1>About SC Corporation</h1>
        <div className={styles.content}>
          <img 
            src="/assets/cm-revanth-reddy.jpg" 
            alt="CM Revanth Reddy" 
            className={styles.leaderImage}
          />
          <p>Government initiative under Hon'ble CM Revanth Reddy</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}