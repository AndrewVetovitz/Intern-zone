from spreadsheet import CompanySpreadsheet
from database import DB

from enums.columns import Columns

db = DB()

cursor = db.getCursor()

spreadsheet = CompanySpreadsheet() 

def update_company_info():
    company_info = spreadsheet.get_companies_info()

    for i in range(len(company_info)):
        company_name = company_info[i]['company_name']
        company_website = company_info[i]['company_website']
        company_description = company_info[i]['company_description']
        company_wikipedia_link = company_info[i]['company_wikipedia_link']

        print(company_name)

        query = ("SELECT * FROM company WHERE name = %s LIMIT 1")

        cursor.execute(query, (company_name,))

        result = cursor.fetchone()

        if result == None:
            query = ("INSERT INTO company (name, description, websiteLink, wikipediaLink) VALUE (%s, %s, %s, %s)")
            args = (company_name, company_description, company_website, company_wikipedia_link)
        else:
            print(result)
            query = ("UPDATE company SET website_url = %s, posting_url = %s, posting_content = %s, status = %s WHERE name = %s")

        cursor.execute(query, args)

        db.commit()

    db.close()
    
        # Update maybe ? check first otherwise set other attributes to 0