#!/usr/bin/python3
# -*- coding: utf-8 -*-
# Auxiliar Module 
#
# Author : Etienne da Silva Filipe Amado da Costa
# Email  : etienne_costa@hotmail.com

import requests,re,random,time,os,json
from string import ascii_lowercase
from bs4  import BeautifulSoup

# Add some variance
def sleep():
    t = 0.01
    t += t * random.uniform(-0.1, 0.1)  
    time.sleep(t)


# Total of images to download 
def totalImages(url:str)-> int:
    resp=requests.get(url).text
    soup=BeautifulSoup(resp,'html.parser')
    athletes= int(re.findall(r'\d+',soup.find("div",{"class":"althelete-total"}).text.strip())[0])
    return athletes

# Return the number of fighters in ufc stats .
def numOfFighters() -> int :
    num = 0
    for i in ascii_lowercase:
        resp = requests.get('http://ufcstats.com/statistics/fighters?char='+i+'&page=all').text
        soup = BeautifulSoup(resp,'html.parser')
        infos = soup.find_all("tr", {"class": "b-statistics__table-row"})
        num+=len(infos)-2
    return num

# Return the number of events in ufc .
def numOfEvents() -> int :
    resp= requests.get('http://ufcstats.com/statistics/events/completed?page=all').text
    soup = BeautifulSoup(resp,'html.parser')
    events = soup.find_all("tr", {"class": "b-statistics__table-row"})
    return len(events)