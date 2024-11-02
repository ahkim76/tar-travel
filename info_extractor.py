from selenium import webdriver
from bs4 import BeautifulSoup
import time


class University:
    def __init__(self, id, name, location, overview):
        self.id = id
        self.name = name
        self.location = location
        self.overview = overview

    def to_string(self):
        return self.name + " at " + self.location + " with ID " + str(id)


def create_txt_files():
    ids = [10169, 10313, 11855]
    unis = []

    for id in ids:
        driver = webdriver.Chrome()

        url = "https://heelsabroad.unc.edu/_portal/tds-program-brochure?programid=" + str(id)
        driver.get(url)

        time.sleep(10)

        soup = BeautifulSoup(driver.page_source, 'html.parser')
        f = open("University" + str(id) + ".txt", "a")

        # get name of the university
        name = soup.find_all('h2')[0]

        # get first table containing overview, location, etc.
        table = soup.find_all('table')[0]
        rows = table.find_all('tr')

        info = [name]
        found = True
        for row in rows:
            cells = row.find_all('td')
            for cell in cells:
                t = cell.text.strip()
                if t == "Overview" or t == "Location":
                    found = False
                if not found:
                    if t == "":
                        continue
                    else:
                        info.append(t)
        f.close()
        unis.append(University(id, name, info[1], info[0]))
        driver.quit()
    print(unis)
