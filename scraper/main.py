import chrome_webdriver
from spreadsheet import CompanySpreadsheet

from enums.columns import Columns

url = 'https://andrewvetovitz.com'

def main():
    print('Main started')

    driver = chrome_webdriver.create_web_driver()

    spreadsheet = CompanySpreadsheet() 

    companies = spreadsheet.get_companies()

    for i in range(len(companies)):
        url = companies[i]['posting_url']
        driver.get(url)
        companies[i]['page'] = driver.page_source 
        print(companies[i])

    # content = driver.page_source

    # file = open('test.txt', 'w')
    # file.write(content)
    # file.close()

    driver.quit()

if __name__ == '__main__': 
    main()