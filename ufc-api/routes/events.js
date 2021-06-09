var express = require('express');
var router = express.Router();
var axios = require('axios');
var gdb = require('../utils/graphdb');


/* Details of a fight . */
router.get('/events',async function (req, res, next) {
    var query = `
select ?s ?name ?date (count (?fights) as ?nrfights) ?country ?city ?state where {
	           
    Optional{   
     ?s ?p :Event ;
    	:Name ?name;
     	:Date ?date;
     	:hadA ?fights;
        :occurred ?location.
    ?location :City ?city;
              :Country ?country;
              :State ?state ;
    }
}
group by ?s ?name ?date ?country ?city ?state `
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
        method:bind.bout.value,
        round:bind.round.value,
        time:bind.time.value,
        timeformat:bind.timeformat.value,
        event:bind.event.value,
        eventname:bind.eventname.value,
        refereename:bind.refereename.value
    }
  });
  res.status(200).jsonp(result);

});

module.exports = router;