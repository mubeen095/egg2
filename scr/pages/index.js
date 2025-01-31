import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '../components/Header'
import Footer from '../components/Footer'
import OrderForm from '../components/OrderForm'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>SC Corporation Egg Delivery</h1>
          <p>Government Nutrition Initiative</p>
        </section>

        <OrderForm />

        <section className={styles.about}>
          <h2>About Us</h2>
          <p>SC Corporation Limited, Hyderabad - Government undertaking for student nutrition</p>
        </section>
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