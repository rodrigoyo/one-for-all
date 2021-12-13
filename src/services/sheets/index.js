import { google } from 'googleapis';
export async function getRecords() {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target
    );

    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: process.env.SPREADSHEET_TAB_NAME,
    });

    const rows = response.data.values;
    if (rows.length) {
      return rows.map((row) =>
        row[3] != ''
          ? {
              id: row[0] ?? '',
              description: row[1] ?? '',
              expert: row[2] ?? '',
              url: row[3] ?? '',
              secret: row[4] ?? '',
            }
          : false
      );
    }
  } catch (err) {
    console.log(err);
  }
  return [];
}
