#!/usr/bin/python3
# -*- coding: utf-8 -*-
# UFC Event Fights
#
# Author : Etienne da Silva Filipe Amado da Costa
# Email  : etienne_costa@hotmail.com

import requests,re,random,time,os,json,pprint
from bs4  import BeautifulSoup
from progress.bar import IncrementalBar

def fightStats(url:str)->dict:
    resp = requests.get(url).text
    soup = BeautifulSoup(resp, 'html.parser')
    red=[] 
    blue=[]
    result = {}
    fight_details = soup.find_all("div", {"class": "b-fight-details__person"})
    red.append(fight_details[0].i.text.strip())
    red.append(fight_details[0].div.h3.a.text.strip())
    blue.append(fight_details[1].i.text.strip())
    blue.append(fight_details[1].div.h3.a.text.strip())
    bout=soup.find("div",{"class":"b-fight-details__fight-head"}).text.strip()
    info_final=[]
    info= soup.find_all("i",{"class":"b-fight-details__text-item"})
    info2 = soup.find_all("i",{"class":"b-fight-details__text-item_first"})
    x=0
    for i in info:
        if(x==len(info)-1):
            info_final.append(list(i.descendants)[-2].strip())
        else:
            info_final.append(list(i.descendants)[-1].strip())
        x+=1
    x=0
    for i in info2:
        if x==0:
            info_final.insert(0,list(i.descendants)[-2].strip())
            x+=1
    final = soup.find_all("tr",{"class":"b-fight-details__table-row"})
    # Totals 
    if len(final) > 0 :
        i=0
        temp=[]
        for f in final[1]:
            if i%2!=0:
                temp.append(re.findall(r'\s*[A-Za-z0-9%:\- ]+' ,f.text.strip()))
            i+=1
        temp=temp[1:]
        redCorner={}
        blueCorner={}
        # KD
        redCorner["KD"]=temp[0][0].strip()
        blueCorner["KD"]=temp[0][1].strip()
        # Sig.Str
        redCorner["SigStr"]=temp[1][0].strip()
        blueCorner["SigStr"]=temp[1][1].strip()
        # Sig.Str.%
        redCorner["SigStrPercentage"]=temp[2][0].strip()
        blueCorner["SigStrPercentage"]=temp[2][1].strip()
        # Total Strikes
        redCorner["TotalStrikes"]=temp[3][0].strip()
        blueCorner["TotalStrikes"]=temp[3][1].strip()
        # TakeDowns
        redCorner["TD"]=temp[4][0].strip()
        blueCorner["TD"]=temp[4][1].strip()
        # Take Downs %
        redCorner["TDPercentage"]=temp[5][0].strip()
        blueCorner["TDPercentage"]=temp[5][1].strip()
        # Submission Attempted
        redCorner["SubAtt"]=temp[6][0].strip()
        blueCorner["SubAtt"]=temp[6][1].strip()
        # Reversal
        redCorner["Reversal"]=temp[7][0].strip()
        blueCorner["Reversal"]=temp[7][1].strip()
        # Control time
        redCorner["CTRL"]=temp[8][0].strip()
        blueCorner["CTRL"]=temp[8][1].strip()

        stats={}
        stats["RedCorner"]=redCorner
        stats["BlueCorner"]=blueCorner
        result["Bout"]=bout
        result["RedCorner"] = red[1]
        result["BlueCorner"] = blue[1]
        result["RedCornerResult"]=red[0]
        result["BlueCornerResult"]=blue[0]
        result["Method"]=info_final[0]
        result["Round"]=info_final[1]
        result["Time"]=info_final[2]
        result["TimeFormat"]=info_final[3]
        result["Referee"]=info_final[4]
        result["Stats"]=stats

        return result