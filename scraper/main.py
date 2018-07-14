import chrome_webdriver
import spreadsheet

url = 'https://andrewvetovitz.com'

def main():
    print('Main started')

    driver = chrome_webdriver.create_web_driver()

    num_rows, companies = spreadsheet.get_company_data()

    print(num_rows)
    print(companies)

    driver.get(url)
    # driver.implicit_wait(10)

    content = driver.page_source

    file = open('test.txt', 'w')
    file.write(content)
    file.close()

if __name__ == '__main__': 
    main()