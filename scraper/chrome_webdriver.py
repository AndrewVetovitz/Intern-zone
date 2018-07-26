from selenium import webdriver
from selenium.common.exceptions import WebDriverException

driverPath = '/usr/lib/chromium-browser/chromedriver'

def create_web_driver():
    options = webdriver.ChromeOptions()
    options.add_argument('headless')

    # set the window size
    options.add_argument('window-size=1200x600')

    # try to initalize the driver
    try:
        driver = webdriver.Chrome(executable_path=driverPath, chrome_options=options)
    except WebDriverException:
        print("failed to start driver at path: " + driverPath)

    return driver
