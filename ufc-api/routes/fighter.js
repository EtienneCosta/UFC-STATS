var express = require('express');
var router = express.Router();
var axios = require('axios');
var gdb = require('../utils/graphdb');
var conversor = require('../utils/data');



/* DETAILS OF A FIGHTER . */
router.get('/:id',async function (req, res, next) {
    var query = `
    select * where { 
        :${req.params.id} a :Fighter ;
           :Name ?name ;
           :Nickname ?nickname;
           :Height ?height ;
           :Weight ?weight ;
           :Reach ?reach ;
           :Stance ?stance;
           :Wins ?wins;
           :Losses ?losses ;
           :Draws ?draws ;
           :Belt ?belt ;
           :DateOfBirth ?dob;
           :SApM	?sapm  ;
           :SLpM	?slpm;
           :StrAcc ?stracc ;
           :StrDef ?strdef ;
           :SubAvg ?subavg;
           :TDAcc ?tdacc;
           :TDAvg ?tdavg;
           :TDDef ?tddef .      
    }`

    var result = await gdb.execQuery(query);
    result = result.results.bindings.map(bind => {
        return{
        id: req.params.id,
          name:bind.name.value,
          nickname:bind.nickname.value, 
          height:bind.height.value,
          weight:bind.weight.value,
          dob:bind.dob.value,
          stance:bind.stance.value,
          reach:bind.reach.value,
          wins:bind.wins.value,
          losses:bind.losses.value,
          draws:bind.draws.value,
          slpm:bind.slpm.value,
          stracc:bind.stracc.value,
          sapm:bind.sapm.value,
          strdef:bind.strdef.value,
          tdavg:bind.tdavg.value,
          tdacc:bind.tdacc.value,
          tddef:bind.tddef.value,
          subavg:bind.subavg.value,
          belt:bind.belt.value
        }
      });
      res.status(200).jsonp(result);
});



/* LIST ALL FIGHTS OF A CERTAIN FIGHTER */
router.get('/fights/:id',async function (req, res, next) {
    var query = `
select * where { 
:${req.params.id} :participated ?fight .
 ?fight	:BlueCorner ?bluecorner ;
          :BlueCornerResult ?bluecornerresult;
          :BlueCornerKD	?bluecornerkd;
          :BlueCornerSigStr ?bluesigstr;
          :BlueCornerTD	?bluecornertd;
          :BlueCornerSubAtt ?bluecornersubatt;
          :RedCorner  ?redcorner ;
          :RedCornerResult ?redcornerresult;
          :RedCornerKD	?redcornerkd;
          :RedCornerSigStr ?redsigstr;
          :RedCornerTD	?redcornertd;
          :RedCornerSubAtt ?redcornersubatt;
          :Method ?method ;
          :Round ?round	;
          :Time ?time ;
          :Bout ?bout;
          :TimeFormat ?timeformat;
          :wasarbitratedBy ?referee;
          :belong ?event.
          ?event :Name ?eventname ;
                 :Date ?date.
          ?referee :Name ?refereename. } 
    
          order by desc (?date)
    `

 var result = await gdb.execQuery(query);
 result = result.results.bindings.map(bind => {
     return{
        id: bind.fight.value.split('#')[1],
        redcorner:bind.redcorner.value,
        redcornerresult:bind.redcornerresult.value, 
        redcornerkd:bind.redcornerkd.value,
        redsigstr:bind.redsigstr.value,
        redcornertd:bind.redcornertd.value,
        redcornersubatt:bind.redcornersubatt.value,
        bluecorner:bind.bluecorner.value,
        bluecornerresult:bind.bluecornerresult.value,
        bluecornerkd:bind.bluecornerkd.value,
        bluecornertd:bind.bluecornertd.value,
        bluesigstr:bind.bluesigstr.value,
        bluecornersubatt :bind.bluecornersubatt .value,
        method:bind.method.value,
        round:bind.round.value,
        time:bind.time.value,
        date:conversor.conversorData(bind.date.value),
        referee:bind.refereename.value,
        bout:bind.bout.value,
        timeformat:bind.timeformat.value,
        event:bind.event.value.split('#')[1],
        eventname:bind.eventname.value
     }
   });
   res.status(200).jsonp(result);
});

module.exports = router;