import chrome_webdriver, sys, json, hashlib, geckodriver

from selenium.webdriver.common.by import By

from spreadsheet import CompanySpreadsheet
from database import DB

from enums.columns import Columns
from enums.status import Status

import company_info

def main():
    print('Main started')

    db = DB()

    cursor = db.getCursor()

    # driver = geckodriver.create_web_driver()
    driver = chrome_webdriver.create_web_driver()

    spreadsheet = CompanySpreadsheet() 

    company_info.update_company_info()

    # company_positions = spreadsheet.get_companies_positions()

    # for i in range(len(company_positions)):
    #     company_name = company_positions[i]['company_name']
    #     company_website = company_positions[i]['company_website']
    #     url = company_positions[i]['posting_url']
    #     status = company_positions[i]['status']
    #     update = company_positions[i]['update_entry']

    #     query = ("SELECT * FROM company WHERE name = %s LIMIT 1")

    #     cursor.execute(query, (company_name,))

    #     result = cursor.fetchone()

    #     # Insert new entry
    #     if result == None:
    #         query = ("INSERT INTO company (name, website_url, posting_url, posting_content, status) VALUES (%s, %s, %s, %s, %s)")
            
    #         if url == '':
    #             args = (company_name, company_website, '', '', status)
    #         else:
    #             hashed_content = hash_url_content(driver, url, i)
    #             args = (company_name, company_website, url, hashed_content, status)

    #         cursor.execute(query, args)
    #         spreadsheet.set_row_updated_false(i + 2)
    #     # Update entry
    #     elif str_to_bool(update) == True:
    #         query = ("UPDATE company SET website_url = %s, posting_url = %s, posting_content = %s, status = %s WHERE name = %s")
            
    #         if url == '':
    #             args = (company_website, '', '', status, company_name)
    #         else:
    #             hashed_content = hash_url_content(driver, url, i)
    #             args = (company_website, url, hashed_content, status, company_name)
                
    #         cursor.execute(query, args)
    #         spreadsheet.set_row_updated_false(i + 2)
    #     # Check entry
    #     else:
    #         if url == '': 
    #             if result[3] != '':
    #                 spreadsheet.set_row_status_bad(i + 2)
    #             else:
    #                 spreadsheet.set_row_status_good(i + 2) 
    #         else:
    #             hashed_content = hash_url_content(driver, url, i)

    #             if hashed_content == result[4]:
    #                 spreadsheet.set_row_status_good(i + 2)
    #             else:
    #                 spreadsheet.set_row_status_bad(i + 2) 

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

def hash_url_content(driver, url, i):
    driver.get(url)

    content = driver.find_element(By.TAG_NAME, 'body').text
    content = content.encode('utf-8')

    return hashlib.sha512(content).hexdigest()

if __name__ == '__main__': 
    main()


    # with open('{}.txt'.format(i),'wb') as w:
    #     w.write(content)
    #     w.close()