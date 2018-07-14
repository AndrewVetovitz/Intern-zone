from selenium import webdriver

def create_web_driver():
    options = webdriver.ChromeOptions()
    options.add_argument('headless')

    # set the window size
    options.add_argument('window-size=1200x600')

    # sets path to chromedriver
    options.executable_path='/usr/lib/chromium-browser/chromedriver'

    # initialize the driver
    driver = webdriver.Chrome(chrome_options=options)

    return driver
