import mysql.connector
from mysql.connector import errorcode

import os
from os.path import join, dirname
from dotenv import load_dotenv
 
dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

config = {
  'user': os.getenv('DB_USER'),
  'password': os.getenv('DB_PASSWORD'),
  'host': os.getenv('DB_HOST'),
  'database': os.getenv('DB_NAME')
}

class DB:
    def __init__(self):
        try:
            self.cnx = mysql.connector.connect(**config)
        except mysql.connector.Error as err:
            if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
                print("Something is wrong with your user name or password")
            elif err.errno == errorcode.ER_BAD_DB_ERROR:
                print("Database does not exist")
            else:
                print(err)

    def getCnx(self):
        return self.cnx

    def commit(self):
        self.cnx.commit()

    def getCursor(self):
        return self.cnx.cursor()

    def close(self):
        self.cnx.close()
