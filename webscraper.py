from selenium import webdriver
from bs4 import BeautifulSoup
import time


def create_txt_files():
    ids = [12033, 10313]

    for id in ids:
        driver = webdriver.Chrome()

        url = "https://heelsabroad.unc.edu/_portal/tds-program-brochure?programid=" + str(id)
        driver.get(url)

        time.sleep(20)

        soup = BeautifulSoup(driver.page_source, 'html.parser')

        table = soup.find_all('table')[0]
        rows = table.find_all('tr')
        print("Number of rows: " + str(len(rows)))
        f = open("University" + str(id) + ".txt", "a")

        for row in rows:
            cells = row.find_all('td')
            for cell in cells:
                print(str(cell))
                f.write(str(cell))

        f.close()

        driver.quit()


create_txt_files()
