import { appendToSheet } from '../../../utils/googleSheets'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await appendToSheet(req.body)
      res.status(200).json({ success: true })
    } catch (error) {
      res.status(500).json({ error: 'Failed to submit order' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}