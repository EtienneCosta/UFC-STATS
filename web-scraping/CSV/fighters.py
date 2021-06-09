#!/usr/bin/python3
# -*- coding: utf-8 -*-
# UFC Fighters Info
#
# Author : Etienne Costa
# Email  : etienne_costa@hotmail.com

import requests,re,random,time,os
from string import ascii_lowercase
from bs4  import BeautifulSoup
from progress.bar import IncrementalBar

# Returns the number of fighters in ufc stats .
def numOfFighters() -> int :
    num = 0
    for i in ascii_lowercase:
        resp = requests.get('http://ufcstats.com/statistics/fighters?char='+i+'&page=all').text
        soup = BeautifulSoup(resp,'html.parser')
        infos = soup.find_all("tr", {"class": "b-statistics__table-row"})
        num+=len(infos)-2

    return num


def statistics(url:str):
        resp = requests.get(url).text
        soup = BeautifulSoup(resp, 'html.parser')
        stats = soup.find_all("div", {"class": "b-list__info-box_style_small-width"})
        career_statistics = soup.find_all("div", {"class": "b-list__info-box_style_middle-width"})
        dob=stats[0].find_all('li')[-1].get_text()
        dob = re.findall(r'\s+[A-Z][a-z].+',dob)
        dob = dob[0].strip().replace(r',','') if len(dob) > 0 else "--"
        statistics=career_statistics[0].find_all('li') 
        values=[ re.findall(r'\d+\.?\d*',s.get_text())  for s in statistics]
        values=list(filter(lambda v: len(v) > 0, values))
        values = [x[0] for x in values]
        info=''
        for v in values :
            info+=','+v
        return dob,info

def fighterstats():
    #First Last Nickname Dob Height Weight Reach Stance Win Loses Draws Belt SLpM Str.Acc SApM Str.Def TD.Avg TD.Acc TD.Def Sub.Avg
    print("This may take a while, have a seat and drink a beer  🍻🍻")
    bar = IncrementalBar('Loading',max=numOfFighters())
    
    with open('fighters.csv','w') as file:
        file.write("First,Last,Nickname,Date of Birth,Height,Weight,Reach,Stance,Wins,Losses,Draws,Belt,SLpM,Str.Acc,SApM,Str.Def,TD.Avg,TD.Acc,TD.Def,Sub.Avg\n") 
            
        for i in ascii_lowercase:
            resp = requests.get('http://ufcstats.com/statistics/fighters?char='+i+'&page=all').text
            soup = BeautifulSoup(resp, 'html.parser')
            infos = soup.find_all("td", {"class": "b-statistics__table-col"})
            j=0
            for i in infos:
                if j in range(0,10) :
                    if j==0:
                        dob,stats = statistics(i.findChild('a')['href'])
                    if j==3:
                        file.write(dob.strip()+",")
                    file.write(i.text.strip()+",") 
                    j+=1
                else :
                    if i.findChildren("img" , recursive=False) :
                        file.write("Champ")
                        file.write(stats+"\n")
                    else : 
                        file.write("--")
                        file.write(stats+"\n")
                    j=0
                    sleep()
                    bar.next()

        bar.finish()




def sleep():
    t = 0.01
    t += t * random.uniform(-0.1, 0.1)  # Add some variance
    time.sleep(t)


def main():
    fighterstats()

main()