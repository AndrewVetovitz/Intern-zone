from selenium import webdriver
from selenium.common.exceptions import WebDriverException

driverPath = '/usr/lib/geckodriver'

def create_web_driver():
    options = webdriver.FirefoxOptions()
    options.add_argument('headless')

    # set the window size
    options.add_argument('window-size=1200x600')

    # try to initalize the driver
    try:
        driver = webdriver.Firefox(executable_path=driverPath, firefox_options=options)
    except WebDriverException:
        print("failed to start driver at path: " + driverPath)

    return driver
