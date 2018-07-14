import gspread
from oauth2client.service_account import ServiceAccountCredentials

key_file = 'scraper_secret.json'

scope = ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive']
creds = ServiceAccountCredentials.from_json_keyfile_name(key_file, scope)
client = gspread.authorize(creds)

sheet = client.open('Company Data').sheet1

result = sheet.get_all_records()

print(result)
