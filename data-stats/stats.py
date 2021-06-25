#!/usr/bin/python3

import json
with open('../web-scraping/JSON/ufc.json','r') as ufcfile:
    data = json.load(ufcfile)
    referees = data['Referees']
    fighters = data['Fighters']
    events = data['Events']
    fights = 0
    locations = []

    for e in events:
        if e['Location'] not in locations:
            locations.append(e['Location'])
        fights+=len(e['Fights'])


    print("Referees :: ",len(referees)) ## Correct
    print("Fighters :: ",len(fighters)) ## Correct
    print("Events :: ",len(events)) ## Correct 
    print("Fights ::", fights) ## Correct
    print("Locations ::",len(locations)) ## Correct
