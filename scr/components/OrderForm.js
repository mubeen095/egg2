import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from '../styles/OrderForm.module.css'

export default function OrderForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    wardenName: '',
    students: '',
    eggs: '',
    address: '',
    deliveryDate: new Date()
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/submit-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      // Handle response
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>{t('header.order')}</h2>
      <div className={styles.formGroup}>
        <label>{t('form.wardenName')}</label>
        <input
          type="text"
          required
          onChange={(e) => setFormData({ ...formData, wardenName: e.target.value })}
        />
      </div>
      {/* Add other form fields */}
      <button type="submit" className={styles.submitButton}>
        {t('form.submit')}
      </button>
    </form>
  )
}