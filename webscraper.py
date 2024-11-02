from bs4 import BeautifulSoup
import requests

url = 'https://heelsabroad.unc.edu/_portal/tds-program-brochure?programid=1253'

page = requests.get(url)

soup = BeautifulSoup(page.text, 'html')

soup.find('program_id')
print(soup)

valid_ids = []

