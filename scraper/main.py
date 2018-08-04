import chrome_webdriver, sys, json

from spreadsheet import CompanySpreadsheet
from database import DB

from enums.columns import Columns
from enums.status import Status

def read_in():
    return sys.stdin.readlines()

def main():
    print('Main started')

    # lines = read_in()

    # print(lines)

    db = DB()

    cursor = db.getCursor()

    query = ("SELECT * FROM company WHERE name = 'google' LIMIT 1")

    cursor.execute(query)
    # entries = cursor.fetchall()

    for entry in cursor:
        print(entry)

    driver = chrome_webdriver.create_web_driver()

    spreadsheet = CompanySpreadsheet() 

    companies = spreadsheet.get_companies()

    for i in range(len(companies)):
        url = companies[i]['posting_url']
        driver.get(url)

        if str_to_bool(companies[i]['update_url']) == True:
            # query = ("UPDATE company SET ") TODO
            print('updating url')
        else:
            print('checking url')

        print(len(driver.page_source))

    db.close()
    driver.quit()

def str_to_bool(s):
    if s == Status.TRUE.name:
         return True
    elif s == Status.FALSE.name:
         return False
    else:
         raise ValueError

if __name__ == '__main__': 
    main()