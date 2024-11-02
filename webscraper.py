from selenium import webdriver
from bs4 import BeautifulSoup
import time


def create_txt_files():
    ids = [10169, 10313, 11855]

    for id in ids:
        driver = webdriver.Chrome()

        url = "https://heelsabroad.unc.edu/_portal/tds-program-brochure?programid=" + str(id)
        driver.get(url)

        time.sleep(10)

        soup = BeautifulSoup(driver.page_source, 'html.parser')
        f = open("University" + str(id) + ".txt", "a")

        # get name of the university
        name = soup.find_all('h2')[0]
        f.write(name.text)

        # get first table containing overview, location, etc. 
        table = soup.find_all('table')[0]
        rows = table.find_all('tr')

        for row in rows:
            cells = row.find_all('td')
            for cell in cells:
                f.write(str(cell.text))

        f.close()

        driver.quit()


create_txt_files()
