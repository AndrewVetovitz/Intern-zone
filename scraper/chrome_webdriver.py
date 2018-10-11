from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.common.exceptions import WebDriverException

driverPath = '/usr/lib/chromium-browser/chromedriver'

def create_web_driver():
    options = webdriver.ChromeOptions()
    options.add_argument('headless')

    # set the window size
    options.add_argument('window-size=1200x600')

    # make sure page loads
    caps = DesiredCapabilities().CHROME
    caps["pageLoadStrategy"] = "normal"  #  complete

    # try to initalize the driver
    try:
        driver = webdriver.Chrome(executable_path=driverPath, desired_capabilities=caps, chrome_options=options)
    except WebDriverException:
        print("failed to start driver at path: " + driverPath)

    return driver
