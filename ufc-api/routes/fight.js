var express = require('express');
var router = express.Router();
var axios = require('axios');
var gdb = require('../utils/graphdb');

/* DETAILS OF A FIGHT . */
router.get('/stats/:id',async function (req, res, next) {
    var query = `
    select ?redcorner ?redcornerctrl ?redcornerkd ?redcornerresult ?redcornerreversal
           ?redcornersigstr ?redcornersigstrpercentage ?redcornersubatt ?redcornertd
           ?redcornertdpercentage ?redcornertotalstrikes ?bluecorner ?bluecornerctrl
           ?bluecornerkd ?bluecornerresult ?bluecornerreversal ?bluecornersigstr
           ?bluecornersigstrpercentage ?bluecornersubatt ?bluecornertd ?bluecornertdpercentage
           ?bluecornertotalstrikes ?bout ?method ?round ?time ?timeformat
           ?event  ?eventname ?refereename where {
           :${req.params.id} :RedCorner ?redcorner ;
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
                             :BlueCorner ?bluecorner ;
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
                             :Bout ?bout;
                             :Method ?method;
                             :Round ?round;
                             :Time ?time;
                             :TimeFormat ?timeformat;
                             :belong ?event;
                             :wasarbitratedBy ?referee.
    	    ?event :Name ?eventname.
    		?referee :Name ?refereename.
}`


var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        redcorner: bind.redcorner.value,
        redcornerctrl:bind.redcornerctrl.value,
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
        bluecornerctrl:bind.bluecornerctrl.value,
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
        timeformat:bind.timeformat.value,
        event:bind.event.value.split('#')[1],
        eventname:bind.eventname.value,
        refereename:bind.refereename.value
    }
  });
  res.status(200).jsonp(result);
});

module.exports = router;