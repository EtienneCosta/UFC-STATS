var express = require('express');
var router = express.Router();
var axios = require('axios');
var gdb = require('../utils/graphdb');
var conversor = require('../utils/data');



router.get('/',async function (req, res, next) {
    var query = `
    select ?s ?name ?date (count (?fights) as ?nrfights) ?country ?city ?state where {
	           
        ?s ?p :Event ;
           :Name ?name;
            :Date ?date;
            :hadA ?fights;
           :occurred ?location.
       ?location :Country ?country;
                 :City ?city.
       optional{
           ?location :State ?state.
       }
   }
   group by ?s ?name ?date ?country ?city ?state 
   order by ?date 
   `
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {

    if (bind.state) {
        return{
            event: bind.s.value.split('#')[1],
            date: conversor.conversorData(bind.date.value),
            name: bind.name.value,
            fights: bind.nrfights.value,
            location:bind.country.value+','+bind.city.value+','+bind.state.value            
        }
    }
    else 
     return{
        event: bind.s.value.split('#')[1],
        name: bind.name.value,
        date: conversor.conversorData(bind.date.value),
        fights: bind.nrfights.value,
        location:bind.country.value+','+bind.city.value
     }
        
  });
  res.status(200).jsonp(result);

});





/*-----------------------------*/



/* =============================================================================================================================================== */
/* GET THE EVENT DETAILS : NAME,DATE,COUNTRY,CITY,STATE */

router.get('/details/:id',async function (req, res, next) {
    var query = `
    select  ?name ?date ?country ?city ?state  where {
        :${req.params.id} a :Event;
                       :Name ?name;
                       :Date ?date;
                       :occurred ?location.
              ?location :Country ?country;
                          :City    ?city.
        optional{
            ?location :State ?state.
        }
       
    } `
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {

    if (bind.state)
        return{
            name: bind.name.value,
            date: conversor.conversorData(bind.date.value),
            location:bind.country.value+','+bind.city.value+','+bind.state.value            
        }
    else 
     return{
        name: bind.name.value,
        date: conversor.conversorData(bind.date.value),
        location:bind.country.value+','+bind.city.value
     }
        
  });
  res.status(200).jsonp(result);

});

/* =============================================================================================================================================== */

/* GET THE FIGHTS OF A CERTAIN EVENT   */

router.get('/fights/:id',async function (req, res, next) {
    var query = `
    select  * where {
        :${req.params.id} ?p :Event ;
             :hadA ?fights.    
        ?fights :BlueCorner ?bluecorner;
                :BlueCornerCTRL ?bluecornerctrl;
                :BlueCornerKD ?bluecornerkd;
                :BlueCornerResult ?bluecornerresult;
                :BlueCornerReversal ?bluecornerreversal;
                :BlueCornerSigStr ?bluecornersigstr;
                :BlueCornerSigStrPercentage ?bluecornersigstrpercentage;
                :BlueCornerSubAtt ?bluecornersubatt;
                :BlueCornerTD ?bluecornertd;
                :BlueCornerTDPercentage ?bluecornertdpercentage;
                :BlueCornerTotalStrikes ?bluecornertotalstrikes; 
                :RedCorner ?redcorner;
                :RedCornerCTRL ?redcornerctrl;
                :RedCornerKD ?redcornerkd;
                :RedCornerResult ?redcornerresult;
                :RedCornerReversal ?redcornerreversal;
                :RedCornerSigStr ?redcornersigstr;
                :RedCornerSigStrPercentage ?redcornersigstrpercentage;
                :RedCornerSubAtt ?redcornersubatt;
                :RedCornerTD ?redcornertd;
                :RedCornerTDPercentage ?redcornertdpercentage;
                :RedCornerTotalStrikes ?redcornertotalstrikes;
                :Bout ?bout;
                :Method ?method;
                :Round ?round;
                :Time ?time;
            :wasarbitratedBy ?referee.
    ?referee :Name ?refereename . 
} `
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
            return{
                redcorner: bind.redcorner.value,
                redcornerctrl: bind.redcornerctrl.value,
                redcornerkd:bind.redcornerkd.value,
                redcornerresult:bind.redcornerresult.value,
                redcornerreversal:bind.redcornerreversal.value,
                redcornersigstr:bind.redcornersigstr.value,
                redcornersigstrpercentage:bind.redcornersigstrpercentage.value,
                redcornersubatt:bind.redcornersubatt.value,
                redcornertd:bind.redcornertd.value,
                redcornertdpercentage:bind.redcornertdpercentage.value,
                redcornertotalstrikes:bind.redcornertotalstrikes.value,
                bluecorner: bind.bluecorner.value,
                bluecornerctrl: bind.bluecornerctrl.value,
                bluecornerkd:bind.bluecornerkd.value,
                bluecornerresult:bind.bluecornerresult.value,
                bluecornerreversal:bind.bluecornerreversal.value,
                bluecornersigstr:bind.bluecornersigstr.value,
                bluecornersigstrpercentage:bind.bluecornersigstrpercentage.value,
                bluecornersubatt:bind.bluecornersubatt.value,
                bluecornertd:bind.bluecornertd.value,
                bluecornertdpercentage:bind.bluecornertdpercentage.value,
                bluecornertotalstrikes:bind.bluecornertotalstrikes.value,
                bout:bind.bout.value,
                method:bind.method.value,
                round:bind.round.value,
                time:bind.time.value,
                referee:bind.refereename.value
            }

  });
  res.status(200).jsonp(result);

});






module.exports = router;