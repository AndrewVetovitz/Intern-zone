import chrome_webdriver, sys, json, hashlib

from spreadsheet import CompanySpreadsheet
from database import DB

from enums.columns import Columns
from enums.status import Status

def read_in():
    return sys.stdin.readlines()

def main():
    print('Main started')

    db = DB()

    cursor = db.getCursor()

    driver = chrome_webdriver.create_web_driver()

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

        print(result)

        # Insert new entry
        if result == None:
            query = ("INSERT INTO company (name, website_url, posting_url, posting_content, status) VALUES (%s, %s, %s, %s, %s)")
            
            if url == '':
                args = (company_name, company_website, url, '', status)
                cursor.execute(query, args)
            else:
                driver.get(url)
                content = driver.page_source

                content = content.encode('utf-8')
                hashed_content = hashlib.sha224(content).hexdigest()

                args = (company_name, company_website, url, hashed_content, status)
                cursor.execute(query, args)

            spreadsheet.set_row_updated_false(i + 2)
        # Update entry
        elif str_to_bool(update) == True:
            query = ("UPDATE company SET website_url = %s, posting_url = %s, posting_content = %s, status = %s WHERE name = %s")
            
            if url == '':
                args = (company_website, url, '', status, company_name)
                cursor.execute(query, args)
            else: 
                driver.get(url)
                content = driver.page_source

                content = content.encode('utf-8')
                hashed_content = hashlib.sha224(content).hexdigest()

                args = (company_name, company_website, url, hashed_content, status)
                cursor.execute(query, args)

            spreadsheet.set_row_updated_false(i + 2)
        # Check entry
        else:
            if url != '': 
                driver.get(url)
                content = driver.page_source

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