import gspread
from oauth2client.service_account import ServiceAccountCredentials

key_file = 'secret_tokens.json'

def get_company_data():
    scope = ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive']
    creds = ServiceAccountCredentials.from_json_keyfile_name(key_file, scope)
    client = gspread.authorize(creds)

    sheet = client.open('Company Data').sheet1

    result = sheet.get_all_records()

    num_rows = len(result)

    return num_rows, result
