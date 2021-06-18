#!usr/bin/python3

import json
with open('../web-scraping/JSON/ufc.json') as ufcJson : 
    data = json.load(ufcJson)

    referees = data['Referees']
    fighters = data['Fighters']
    events = data['Events']
    locations = []
    eventsTTL=""
    fightTTL=""
    total=0



    with open('ufc.ttl','w+') as ufcttl :

        ufcttl.write("""
@prefix : <http://www.di.uminho.pt/prc2021/ufc#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix xml: <http://www.w3.org/XML/1998/namespace> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@base <http://www.di.uminho.pt/prc2021/ufc> .

<http://www.di.uminho.pt/prc2021/ufc> rdf:type owl:Ontology .

#################################################################
#    Object Properties
#################################################################


###  http://www.di.uminho.pt/prc2021/ufc#won
:won rdf:type owl:ObjectProperty ;
              owl:inverseOf :waswonBy ;
              rdfs:domain :Fighter ;
              rdfs:range :Fight .


###  http://www.di.uminho.pt/prc2021/ufc#lost
:lost rdf:type owl:ObjectProperty ;
              owl:inverseOf :waslostBy ;
              rdfs:domain :Fighter ;
              rdfs:range :Fight .

###  http://www.di.uminho.pt/prc2021/ufc#tied
:tied rdf:type owl:ObjectProperty ;
              owl:inverseOf :wastiedBy ;
              rdfs:domain :Fighter ;
              rdfs:range :Fight .

###  http://www.di.uminho.pt/prc2021/ufc#nc
:nc rdf:type owl:ObjectProperty ;
              owl:inverseOf :hadNC ;
              rdfs:domain :Fighter ;
              rdfs:range :Fight .


###  http://www.di.uminho.pt/prc2021/ufc#arbitrated
:arbitrated rdf:type owl:ObjectProperty ;
            owl:inverseOf :wasarbitratedBy ;
            rdfs:domain :Referee ;
            rdfs:range :Fight .

###  http://www.di.uminho.pt/prc2021/ufc#hadA
:hadA rdf:type owl:ObjectProperty ;
      rdfs:domain :Event ;
      rdfs:range :Fight .


###  http://www.di.uminho.pt/prc2021/ufc#hadThe
:hadThe rdf:type owl:ObjectProperty ;
        owl:inverseOf :occurred ;
        rdfs:domain :Location ;
        rdfs:range :Event .


###  http://www.di.uminho.pt/prc2021/ufc#participated
:participated rdf:type owl:ObjectProperty ;
              owl:inverseOf :wasmadeBy ;
              rdfs:domain :Fighter ;
              rdfs:range :Fight .


###  http://www.di.uminho.pt/prc2021/ufc#belong
:belong rdf:type owl:ObjectProperty ;
        owl:inverseOf :hadA .


###  http://www.di.uminho.pt/prc2021/ufc#occurred
:occurred rdf:type owl:ObjectProperty .


###  http://www.di.uminho.pt/prc2021/ufc#wasarbitratedBy
:wasarbitratedBy rdf:type owl:ObjectProperty .


###  http://www.di.uminho.pt/prc2021/ufc#wasmadeBy
:wasmadeBy rdf:type owl:ObjectProperty .


###  http://www.di.uminho.pt/prc2021/ufc#waswonBy
:waswonBy rdf:type owl:ObjectProperty .

###  http://www.di.uminho.pt/prc2021/ufc#waslostBy
:waslostBy rdf:type owl:ObjectProperty .

###  http://www.di.uminho.pt/prc2021/ufc#wastiedBy
:wastiedBy rdf:type owl:ObjectProperty .

###  http://www.di.uminho.pt/prc2021/ufc#hadNC
:hadNC rdf:type owl:ObjectProperty .


#################################################################
#    Data properties
#################################################################

###  http://www.di.uminho.pt/prc2021/ufc#Belt
:Belt rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#BlueCorner
:BlueCorner rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#BlueCornerCTRL
:BlueCornerCTRL rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#BlueCornerKD
:BlueCornerKD rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#BlueCornerResult
:BlueCornerResult rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#BlueCornerReversal
:BlueCornerReversal rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#BlueCornerSigStr
:BlueCornerSigStr rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#BlueCornerSigStrPercentage
:BlueCornerSigStrPercentage rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#BlueCornerSubAtt
:BlueCornerSubAtt rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#BlueCornerTD
:BlueCornerTD rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#BlueCornerTDPercentage
:BlueCornerTDPercentage rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#BlueCornerTotalStrikes
:BlueCornerTotalStrikes rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#Bout
:Bout rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#City
:City rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#Country
:Country rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#Date
:Date rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#DateOfBirth
:DateOfBirth rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#Draws
:Draws rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#Height
:Height rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#Losses
:Losses rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#Method
:Method rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#Name
:Name rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#Nickname
:Nickname rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#Reach
:Reach rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#RedCorner
:RedCorner rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#RedCornerCTRL
:RedCornerCTRL rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#RedCornerKD
:RedCornerKD rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#RedCornerResult
:RedCornerResult rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#RedCornerReversal
:RedCornerReversal rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#RedCornerSigStr
:RedCornerSigStr rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#RedCornerSigStrPercentage
:RedCornerSigStrPercentage rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#RedCornerSubAtt
:RedCornerSubAtt rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#RedCornerTD
:RedCornerTD rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#RedCornerTDPercentage
:RedCornerTDPercentage rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#RedCornerTotalStrikes
:RedCornerTotalStrikes rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#Round
:Round rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#SApM
:SApM rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#SLpM
:SLpM rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#Stance
:Stance rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#State
:State rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#StrAcc
:StrAcc rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#StrDef
:StrDef rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#SubAvg
:SubAvg rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#TDAcc
:TDAcc rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#TDAvg
:TDAvg rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#TDDef
:TDDef rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#Time
:Time rdf:type owl:DatatypeProperty ;
      rdfs:subPropertyOf owl:topDataProperty .


###  http://www.di.uminho.pt/prc2021/ufc#TimeFormat
:TimeFormat rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#Weight
:Weight rdf:type owl:DatatypeProperty .


###  http://www.di.uminho.pt/prc2021/ufc#Wins
:Wins rdf:type owl:DatatypeProperty .


#################################################################
#    Classes
#################################################################

###  http://www.di.uminho.pt/prc2021/ufc#Event
:Event rdf:type owl:Class .


###  http://www.di.uminho.pt/prc2021/ufc#Fight
:Fight rdf:type owl:Class .


###  http://www.di.uminho.pt/prc2021/ufc#Fighter
:Fighter rdf:type owl:Class .


###  http://www.di.uminho.pt/prc2021/ufc#Location
:Location rdf:type owl:Class .


###  http://www.di.uminho.pt/prc2021/ufc#Referee
:Referee rdf:type owl:Class .


#################################################################
#    Individuals
#################################################################


""")


        ufcttl.write("""
#################################################################
#    Referees
################################################################# 

""")

        for r in referees:
            referee = """
### http://www.di.uminho.pt/prc2021/ufc#{id}
:{id} rdf:type owl:NamedIndividual ,
                :Referee ;
            :Name "{name}"^^xsd:string .\n
    """.format(id=r["Name"].replace(' ','_').lower(),name=r["Name"])
            ufcttl.write(referee)


        ufcttl.write("""
#################################################################
#    Fighters
################################################################# 

""")

        for f in fighters:
            fighter = """
###  http://www.di.uminho.pt/prc2021/ufc#{id}
:{id} rdf:type owl:NamedIndividual ,
                          :Fighter ;
                 :Name "{name}"^^xsd:string ;
                 :Nickname "{nickname}"^^xsd:string ;
                 :DateOfBirth "{dob}"^^xsd:string ;
                 :Height "{height}"^^xsd:string ;
                 :Weight "{weight}"^^xsd:string ;
                 :Reach "{reach}"^^xsd:string ;
                 :Stance "{stance}"^^xsd:string ;
                 :Belt "{belt}"^^xsd:boolean ;
                 :Wins "{wins}"^^xsd:int ;
                 :Draws "{draws}"^^xsd:int ;
                 :Losses "{losses}"^^xsd:int ;
                 :SApM "{sapm}"^^xsd:string ;
                 :SLpM "{slpm}"^^xsd:string ;
                 :StrAcc "{stracc}"^^xsd:string ;
                 :StrDef "{strdef}"^^xsd:string ;
                 :SubAvg "{subavg}"^^xsd:string ;
                 :TDAcc "{tdacc}"^^xsd:string ;
                 :TDAvg "{tdavg}"^^xsd:string ;
                 :TDDef "{tddef}"^^xsd:string .
    """.format(id=f["Name"].replace(' ','_').replace('\'','_').replace('.','').lower(),name=f["Name"],nickname=f["Nickname"],dob=f["DateOfBirth"],
    height=f["Height"],weight=f["Weight"],reach=f["Reach"],stance=f["Stance"],belt=f["Belt"],wins=f["Wins"],
    draws=f["Draws"],losses=f["Losses"],sapm=f["SApM"],slpm=f["SLpM"],stracc=f["StrAcc"],strdef=f["StrDef"],
    subavg=f["SubAvg"],tdacc=f["TDAcc"],tdavg=f["TDAvg"],tddef=f["TDDef"])

            ufcttl.write(fighter)
            total+=1

        for e in events:
            locations.append(e['Location'])

        locations_aux=[]
        for l in locations:
            if locations_aux.count(l)==0:
                locations_aux.append(l)

        locations={}

        for l in range(len(locations_aux)):
            locations["location"+str(l)] = locations_aux[l]


        ufcttl.write("""
#################################################################
#    Locations
################################################################# 

""")

        for key,value in locations.items():
            if len(value)==2:
                        places = """
###  http://www.di.uminho.pt/prc2021/ufc#{id}
:{id} rdf:type owl:NamedIndividual ,
                    :Location ;
            :Country "{country}"^^xsd:string ;
            :City "{city}"^^xsd:string .\n
    """.format(id=key,country=value["Country"],city=value["City"])

            elif len(value)==3:
                places = """
###  http://www.di.uminho.pt/prc2021/ufc#{id}
:{id} rdf:type owl:NamedIndividual ,
                    :Location ;
            :Country "{country}"^^xsd:string ;
            :City "{city}"^^xsd:string ;
            :State "{state}"^^xsd:string .\n
        """.format(id=key,country=value["Country"],city=value["City"],state=value["State"])
            ufcttl.write(places)


        ufcttl.write("""
#################################################################
#    Events & Fights
################################################################# 

""")

        for e in events:
            eventsTTL+="""
###  http://www.di.uminho.pt/prc2021/ufc#{id}
:{id} rdf:type owl:NamedIndividual ,
               :Event ;
            :occurred :{location} ;
            :Date "{date}"^^xsd:string ;
            :Name "{name}"^^xsd:string .\n
    """.format(id=e["Name"].replace('\'','').replace('!','').lower(),location=[key for key,value in locations.items() if value==e["Location"]][0],date=e["Date"],name=e["Name"].replace('_',' '))

            for f in e["Fights"]:
                
                if f["RedCornerResult"]=="W":
                        red = ":waswonBy    :"+f["RedCorner"].replace(' ','_').replace('\'','_').replace('.','').lower()
                        blue = ":waslostBy  :"+f["BlueCorner"].replace(' ','_').replace('\'','_').replace('.','').lower()

                elif f["RedCornerResult"]=="L":
                        red  = ":waslostBy  :"+f["RedCorner"].replace(' ','_').replace('\'','_').replace('.','').lower()
                        blue = ":waswonBy   :"+f["BlueCorner"].replace(' ','_').replace('\'','_').replace('.','').lower()
                
                elif f["RedCornerResult"]=="D":
                        red  = ":wastiedBy  :"+f["RedCorner"].replace(' ','_').replace('\'','_').replace('.','').lower()
                        blue = ":wastiedBy  :"+f["BlueCorner"].replace(' ','_').replace('\'','_').replace('.','').lower()


                else : 
                        red  = ":hadNC    :"+f["RedCorner"].replace(' ','_').replace('\'','_').replace('.','').lower()
                        blue = ":hadNC    :"+f["BlueCorner"].replace(' ','_').replace('\'','_').replace('.','').lower()


                eventsTTL+="""
###  http://www.di.uminho.pt/prc2021/ufc#{id}
:{id} rdf:type owl:NamedIndividual ,
                                            :Fight ;
                                   :belong :{event} ;
                                   :wasarbitratedBy :{referee} ;
                                   :wasmadeBy :{fighter1_id} ,
                                              :{fighter2_id} ;
                                   {r};
                                   {b}; 
                                   :Bout "{bout}"^^xsd:string ;
                                   :Method "{method}"^^xsd:string ;
                                   :Round "{round}"^^xsd:string ;
                                   :Time "{time}"^^xsd:string ;
                                   :TimeFormat "{timeformat}"^^xsd:string ;
                                   :BlueCorner "{bluecorner}"^^xsd:string ;
                                   :BlueCornerCTRL "{bluecornerctrl}"^^xsd:string ;
                                   :BlueCornerKD "{bluecornerkd}"^^xsd:string ;
                                   :BlueCornerResult "{bluecornerresult}"^^xsd:string ;
                                   :BlueCornerReversal "{bluecornerreversal}"^^xsd:string ;
                                   :BlueCornerSigStr "{bluecornersigstr}"^^xsd:string ;
                                   :BlueCornerSigStrPercentage "{bluecornersigstrpercentage}"^^xsd:string ;
                                   :BlueCornerTotalStrikes "{bluecornertotalstrikes}"^^xsd:string;
                                   :BlueCornerSubAtt "{bluecornersubatt}"^^xsd:string ;
                                   :BlueCornerTD "{bluecornertd}"^^xsd:string ;
                                   :BlueCornerTDPercentage "{bluecornertdpercentage}"^^xsd:string ;
                                   :RedCorner "{redcorner}"^^xsd:string ;
                                   :RedCornerCTRL "{redcornerctrl}"^^xsd:string ;
                                   :RedCornerKD "{redcornerkd}"^^xsd:string ;
                                   :RedCornerResult "{redcornerresult}"^^xsd:string ;
                                   :RedCornerReversal "{redcornerreversal}"^^xsd:string ;
                                   :RedCornerSigStr "{redcornersigstr}"^^xsd:string ;
                                   :RedCornerSigStrPercentage "{redcornersigstrpercentage}"^^xsd:string ;
                                   :RedCornerSubAtt "{redcornersubatt}"^^xsd:string ;
                                   :RedCornerTD "{redcornertd}"^^xsd:string ;
                                   :RedCornerTDPercentage "{redcornertdpercentage}"^^xsd:string ;
                                   :RedCornerTotalStrikes "{redcornertotalstrikes}"^^xsd:string .\n

    """.format(id=(e["Date"].replace(' ','_')+'_'+f["RedCorner"].split(' ')[1]+'_vs_'+f["BlueCorner"].split(' ')[1]).replace('\'','_').lower(),
    event=e["Name"].replace('\'','').replace('!','').lower(),referee=f["Referee"].replace(' ','_').lower(),bout=f["Bout"],method=f["Method"],
    round=f["Round"],time=f["Time"],timeformat=f["TimeFormat"],bluecorner=f["BlueCorner"],redcorner=f["RedCorner"],
    bluecornerresult=f["BlueCornerResult"],redcornerresult=f["RedCornerResult"],
    bluecornerkd=f["Stats"]["BlueCorner"]["KD"],
    bluecornersigstr=f["Stats"]["BlueCorner"]["SigStr"],
    bluecornersigstrpercentage=f["Stats"]["BlueCorner"]["SigStrPercentage"],
    bluecornertotalstrikes=f["Stats"]["BlueCorner"]["TotalStrikes"],
    bluecornertd=f["Stats"]["BlueCorner"]["TD"],
    bluecornertdpercentage=f["Stats"]["BlueCorner"]["TDPercentage"],
    bluecornersubatt=f["Stats"]["BlueCorner"]["SubAtt"],
    bluecornerreversal=f["Stats"]["BlueCorner"]["Reversal"],
    bluecornerctrl=f["Stats"]["BlueCorner"]["CTRL"],
    redcornerkd=f["Stats"]["RedCorner"]["KD"],
    redcornersigstr=f["Stats"]["RedCorner"]["SigStr"],
    redcornersigstrpercentage=f["Stats"]["RedCorner"]["SigStrPercentage"],
    redcornertotalstrikes=f["Stats"]["RedCorner"]["TotalStrikes"],
    redcornertd=f["Stats"]["RedCorner"]["TD"],
    redcornertdpercentage=f["Stats"]["RedCorner"]["TDPercentage"],
    redcornersubatt=f["Stats"]["RedCorner"]["SubAtt"],
    redcornerreversal=f["Stats"]["RedCorner"]["Reversal"],
    redcornerctrl=f["Stats"]["RedCorner"]["CTRL"],
    fighter1_id=f["BlueCorner"].replace(' ','_').replace('\'','_').replace('.','').lower(),
    fighter2_id=f["RedCorner"].replace(' ','_').replace('\'','_').replace('.','').lower(),
    r=red,
    b=blue
    )

            ufcttl.write(eventsTTL)
            eventsTTL=""
    
        ufcttl.write("###  Generated by Etienne Costa :: contact : etienne_costa@hotmail.com")

print(total)