#!/usr/bin/python3
# -*- coding: utf-8 -*-
# UFC Fighters Images
#
# Author : Etienne Costa
# Email  : etienne_costa@hotmail.com

import requests as req
from bs4 import BeautifulSoup
import re
import os
import auxiliar as aux
from progress.bar import IncrementalBar


def fightersimages(athletes:int):
    print("This may take a while, have a seat and drink a beer 🍻.") 
    bar = IncrementalBar('Loading',max=athletes)

    for i in range(0,92):
          resp = req.get('https://www.ufc.com/athletes/all?gender=All&page='+str(i)).text
          soup = BeautifulSoup(resp,'html.parser')
          infos = soup.find_all("div", {"class":"c-listing-athlete-flipcard__back"})
          for info in infos :
                if len(info.find_all("img")) > 0: 
                    url=info.find_all("img")[0]['src']
                    if re.match(r'https',url):
                        name=info.find_all("span",{"class":"c-listing-athlete__name"})[0].get_text().strip()
                        response= req.get(url)
                        file = open(name.replace(' ','-')+".png","wb")
                        file.write(response.content)
                        file.close()
                    else:
                        athletes-=1
                else:
                    athletes-=1
                 
                aux.sleep()
                bar.next()
    bar.finish()

    print("Downloaded "+str(athletes)+" ufc fighters images 🥊🥋.")


def main():
    total=aux.totalImages('https://www.ufc.com/athletes/all')
    fightersimages(total)

main()