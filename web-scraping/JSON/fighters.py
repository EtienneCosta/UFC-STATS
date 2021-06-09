#!/usr/bin/python3
# -*- coding: utf-8 -*-
# UFC Fighters Info To Json 
#
# Author : Etienne da Silva Filipe Amado da Costa
# Email  : etienne_costa@hotmail.com

# 5 May 2021 - 3634 Fighters

import requests,re,random,time,os,json,pprint
from string import ascii_lowercase
from bs4  import BeautifulSoup
from progress.bar import IncrementalBar
import auxiliar as aux


# Return the date of birthday (DOB) and some career statistics : 
def statistics(url:str):
        resp = requests.get(url).text
        soup = BeautifulSoup(resp, 'html.parser')
        stats = soup.find_all("div", {"class": "b-list__info-box_style_small-width"})
        career_statistics = soup.find_all("div", {"class": "b-list__info-box_style_middle-width"})
        dob=stats[0].find_all('li')[-1].get_text()
        dob = re.findall(r'\s+[A-Z][a-z].+',dob)
        dob = dob[0].strip().replace(r',','') if len(dob) > 0 else "--"
        statistics=career_statistics[0].find_all('li') 
        stats=[ re.findall(r'\d+\.?\d*',s.get_text())  for s in statistics]
        stats=list(filter(lambda v: len(v) > 0, stats))
        stats = [s[0] for s in stats]
        return dob,stats


def fighterstats()->[dict]:
    print("This may take a while, have a seat and drink a beer.")
    bar = IncrementalBar('Loading',max=aux.numOfFighters())
    fighters = []
    Fighters = {}

    for i in ascii_lowercase:
        resp = requests.get('http://ufcstats.com/statistics/fighters?char='+i+'&page=all').text
        soup = BeautifulSoup(resp, 'html.parser')
        infos = soup.find_all("td", {"class": "b-statistics__table-col"})
        j=0
        fighter = {}
        aux_list = []
        for i in infos:
            if j in range(0,10):
                if j==0:
                    dob,stats = statistics(i.findChild('a')['href'])
                aux_list.append(i.text.strip()) 
                j+=1
            else :
                if i.findChildren("img" , recursive=False) :
                    aux_list.append("true")
                else : 
                    aux_list.append("false")
                j=0
                fighter["Name"] = aux_list[0]+' '+aux_list[1]
                fighter["Nickname"] = aux_list[2] if len(aux_list[2]) > 0 else "--"
                fighter["Height"] = aux_list[3].replace(r'"','') if aux_list[3] !="--" else "--"
                fighter["Weight"] = aux_list[4].replace(r'.','') if len(aux_list[4]) > 0 else "--"
                fighter["Reach"] = float(aux_list[5].replace(r'"','')) if aux_list[5]!="--" else "--"
                fighter["Stance"] = aux_list[6] if len(aux_list[6]) > 0 else "--"
                fighter["Wins"] = int(aux_list[7])
                fighter["Losses"] = int(aux_list[8])
                fighter["Draws"] = int(aux_list[9])
                fighter["Belt"] =  aux_list[10] 
                fighter["DateOfBirth"]=dob
                fighter["SLpM"]= float(stats[0])
                fighter["StrAcc"]= float(stats[1])
                fighter["SApM"]= float(stats[2])
                fighter["StrDef"]= float(stats[3])
                fighter["TDAvg"]= float(stats[4])
                fighter["TDAcc"]= float(stats[5])
                fighter["TDDef"]= float(stats[6])
                fighter["SubAvg"]= float(stats[7])
                fighters.append(fighter)
                fighter = {}
                aux_list = []
                aux.sleep()
                bar.next()
    bar.finish()
    return fighters