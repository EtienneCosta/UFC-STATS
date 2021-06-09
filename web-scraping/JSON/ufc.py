#!/usr/bin/python3
# -*- coding: utf-8 -*-
# UFC Fighters Info To Json 
#
# Author : Etienne da Silva Filipe Amado da Costa
# Email  : etienne_costa@hotmail.com

import events,fights,fighters
import json


def main():
   
    with open('ufc.json', 'w') as ufcfile:
        ufc = {}
        referee_list=[]
        eventsFights,referees = events.events_fights('http://ufcstats.com/statistics/events/completed?page=all')
        
        for r in referees:
            referee = {}
            referee["Name"]=r
            referee_list.append(referee)
        ufc["Referees"]=referee_list
       
       
        ufc["Fighters"]= fighters.fighterstats()
        ufc["Events"]=eventsFights
      
       
        json.dump(ufc, ufcfile,indent=5)
       
main()