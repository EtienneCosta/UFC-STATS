#!/usr/bin/python3

import json
with open('../Data/ufc.json','r') as ufcfile:
    data = json.load(ufcfile)
    referees = data['Referees']
    fighters = data['Fighters']
    events = data['Events']

    print("Referees :: ",len(referees)) ## Correct
    print("Fighters :: ",len(fighters)) ## Correct
    print("Events :: ",len(events)) ## Correct 

