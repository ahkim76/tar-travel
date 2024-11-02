from bs4 import BeautifulSoup
import requests

url = 'https://mycarolina.unc.edu/portal/study_abroad_preapproved_courses'
page = requests.get(url)
soup = BeautifulSoup(page.text, 'html.parser')
print("Number of tables: " + str(len(soup.find_all('table'))))
table = soup.find_all('table')[1]
rows = table.find_all('tr')
print("Number of rows: " + str(len(rows)))
for row in rows:
    cells = row.find_all('td')
    country = cells[0].text
    program = cells[1].text
    print("Cell length: " + str(len(cells)))
    # name = cells[2].text.strip()
    print(country, program)
