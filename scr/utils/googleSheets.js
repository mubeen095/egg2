const { GoogleSpreadsheet } = require('google-spreadsheet')

export const appendToSheet = async (data) => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID)
  
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  })

  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[0]
  await sheet.addRow({
    Timestamp: new Date().toISOString(),
    ...data
  })
}