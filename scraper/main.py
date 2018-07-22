import chrome_webdriver
from spreadsheet import CompanySpreadsheet

url = 'https://andrewvetovitz.com'

def main():
    print('Main started')

    # driver = chrome_webdriver.create_web_driver()

    spreadsheet = CompanySpreadsheet() 

    companies = spreadsheet.get_companies()

    for i in range(len(companies)):
        print(companies[i])

    # driver.get(url)

    # content = driver.page_source

    # file = open('test.txt', 'w')
    # file.write(content)
    # file.close()

if __name__ == '__main__': 
    main()