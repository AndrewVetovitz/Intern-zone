import gspread
from oauth2client.service_account import ServiceAccountCredentials

from enums.status import Status
from enums.columns import Columns

key_file = 'secret_tokens.json'
status_column = 4

class CompanySpreadsheet:
    def __init__(self):
        scope = ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive']
        creds = ServiceAccountCredentials.from_json_keyfile_name(key_file, scope)
        self.client = gspread.authorize(creds)

    def get_companies(self):
        sheet = self.client.open('Company Data').sheet1

        return sheet.get_all_records()

    def set_row_status_bad(self, row):
        sheet = self.client.open('Company Data').sheet1
        sheet.update_cell(row, Columns.STATUS.value, Status.BAD.name)

    def set_row_status_good(self, row):
        sheet = self.client.open('Company Data').sheet1
        sheet.update_cell(row, Columns.STATUS.value, Status.GOOD.name)
