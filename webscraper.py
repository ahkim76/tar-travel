from selenium import webdriver
from bs4 import BeautifulSoup
import time

driver = webdriver.Chrome()

url = "https://heelsabroad.unc.edu/_portal/tds-program-brochure?programid=10169"
driver.get(url)

time.sleep(30)

soup = BeautifulSoup(driver.page_source, 'html.parser')
print(soup.prettify())

f = open("test.txt", "a")
f.write(soup.prettify())
f.close()

driver.quit()
