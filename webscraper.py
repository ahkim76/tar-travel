from selenium import webdriver
from bs4 import BeautifulSoup
import time
import numpy as np
import pandas as pd
import json


class University:
    def __init__(self, identifier, name, location, overview, student_experience):
        self.identifier = identifier
        self.name = name
        self.location = location
        self.overview = overview
        self.student_experience = student_experience

    
    def to_string(self):
        return self.name + " at " + self.location.city + ", " + self.location.country + " with ID " + str(self.identifier)
    

class Overview:
    def __init__(self, description, details):
        self.description = description
        self.details = details


class Location:
    def __init__(self, city, country, description, coordinates):
        self.city = city
        self.country = country
        self.description = description
        self.coordinates = coordinates



def get_university_objects(ids):
    unis = []

    for i in ids:
        driver = webdriver.Chrome()

        url = "https://heelsabroad.unc.edu/_portal/tds-program-brochure?programid=" + str(i)
        driver.get(url)

        time.sleep(6)

        soup = BeautifulSoup(driver.page_source, 'html.parser')
        f = open("University" + str(i) + ".txt", "a")

        # get name of the university
        name = soup.find_all('h2')[0]

        # get first table containing overview, location, etc.
        table = soup.find_all('table')[0]
        rows = table.find_all('tr')

        overview_found = False
        location_found = False
        experience_found = False

        overview = None
        location = None
        student_experience = None

        for row in rows:
            cells = row.find_all('td')
            for cell in cells:
                text = cell.text.strip()

                if text == "Overview":
                    overview_found = True
                elif overview_found and text != "":
                    text = text.split("\n")
                    overview = Overview(text[0], text[1])
                    overview_found = False

                if text == "Location":
                    location_found = True
                elif location_found and text != "":
                    text = text.split("\n")
                    place = text[0].split(", ")
                    city = place[0]
                    country = place[1]
                    coordinates = getCoords(city, country)

                    location = Location(city, country, text[1], coordinates)
                    location_found = False

                if text == "Student Experience":
                    experience_found = True
                elif experience_found and text != "":
                    student_experience = text
                    experience_found = False
                
                    
        f.close()
        unis.append(University(str(i), name.text, location, overview.description, student_experience))
        driver.quit()

    return unis



def reformat(oldName):
    splt = oldName.split(", ")
    if len(splt) > 1:
        return splt[1] + " " + splt[0]
    else:
        return splt[0]

class CityDoesNotExistException(Exception):
    pass

class MultipleCitiesException(Exception):
    pass



f = pd.read_csv("worldcities.csv").filter(["city_ascii", "lat", "lng", "country"])
f["country"] = f["country"].apply(reformat)
f["city, country"] = f["city_ascii"] + ", " + f["country"]


def getCoords(city, country):
    city = city.capitalize()
    country = country.capitalize()
    cc = city + ", " + country
    df = f[f["city, country"] == cc]
    if len(df) == 0:
        raise CityDoesNotExistException()
    if len(df) > 1:
        raise MultipleCitiesException()
    print(df)
    return [float(df["lat"].item()), float(df["lng"].item())]




# ids = [12534, 12033, 11855, 10676, 10328, 10303, 10310, 10312, 10255, 10257, 10244, 10223, 10172, 10171, 10167, 10326, 10329, 10319, 10193, 10189, 10187, 10256, 10000, 11742, 10678, 12403, 11779, 10333, 10339, 10339, 10324, 10265, 10242, 10245, 10248, 10249, 10232, 10237, 10226, 10214, 10221, 10204, 10205, 10175, 10169, 10337, 11751, 10327, 10164, 10309, 10336, 10186, 12446, 10236, 10331, 10301, 10301, 10307, 10345, 10227, 10683, 10335, 10341, 10342, 10325, 10313, 10315, 10318, 10262, 10264, 10247, 10239, 10222, 10181, 10163, 10321, 10275, 10338, 10190, 10191, 10192, 10188, 10323, 11863, 12315, 10173, 10207]
ids = [10169]
universities = get_university_objects(ids)
for uni in universities:
    print(uni.location.coordinates[0], uni.location.coordinates[1])
