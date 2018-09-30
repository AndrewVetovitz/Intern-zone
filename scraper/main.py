import chrome_webdriver, sys, json, hashlib, geckodriver

from spreadsheet import CompanySpreadsheet
from database import DB

from enums.columns import Columns
from enums.status import Status

import time

def read_in():
    return sys.stdin.readlines()

def main():
    print('Main started')

    db = DB()

    cursor = db.getCursor()

    # driver = geckodriver.create_web_driver()
    driver = chrome_webdriver.create_web_driver()
    timeout = 5
    i = 0

    spreadsheet = CompanySpreadsheet() 

    companies = spreadsheet.get_companies()

    for i in range(len(companies)):
        company_name = companies[i]['company_name']
        company_website = companies[i]['company_website']
        url = companies[i]['posting_url']
        status = companies[i]['status']
        update = companies[i]['update_entry']

        query = ("SELECT * FROM company WHERE name = %s LIMIT 1")

        cursor.execute(query, (company_name,))

        result = cursor.fetchone()

        # Insert new entry
        if result == None:
            query = ("INSERT INTO company (name, website_url, posting_url, posting_content, status) VALUES (%s, %s, %s, %s, %s)")
            
            if url == '':
                args = (company_name, company_website, '', '', status)
            else:
                driver.get(url)
                time.sleep(timeout)
                content = driver.page_source

                content = content.encode('utf-8')
                hashed_content = hashlib.sha512(content).hexdigest()

                args = (company_name, company_website, url, hashed_content, status)

            cursor.execute(query, args)
            spreadsheet.set_row_updated_false(i + 2)
        # Update entry
        elif str_to_bool(update) == True:
            query = ("UPDATE company SET website_url = %s, posting_url = %s, posting_content = %s, status = %s WHERE name = %s")
            
            if url == '':
                args = (company_website, '', '', status, company_name)
            else:
                driver.get(url)
                time.sleep(timeout)
                content = driver.page_source

                content = content.encode('utf-8')
                hashed_content = hashlib.sha512(content).hexdigest()

                args = (company_website, url, hashed_content, status, company_name)
                
            cursor.execute(query, args)
            spreadsheet.set_row_updated_false(i + 2)
        # Check entry
        else:
            if url == '': 
                if result[3] != '':
                    spreadsheet.set_row_status_bad(i + 2)
                else:
                    spreadsheet.set_row_status_good(i + 2) 
            else:
                driver.get(url)
                time.sleep(timeout)
                content = driver.page_source

                content = content.encode('utf-8')

                with open('{}.txt'.format(i),'wb') as w:
                    w.write(content)
                    w.close()

                i += 1

                hashed_content = hashlib.sha512(content).hexdigest()

                print(hashed_content)
                print(result[4])
                # print('curr: ' + result[3] + ' next: ' + url)
                print()

                if hashed_content == result[4]:
                    spreadsheet.set_row_status_good(i + 2)
                else:
                    spreadsheet.set_row_status_bad(i + 2)
                
                # print(result[4])    

        db.commit()

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