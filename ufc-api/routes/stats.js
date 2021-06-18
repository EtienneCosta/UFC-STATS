var express = require('express');
var router = express.Router();
var axios = require('axios');
var gdb = require('../utils/graphdb');



/* ===========================CAREER STATS ================================ */

/* Top 10 - Total Fights in UFC . */
router.get('career/ufc-fights', async function (req, res, next) {
    var query = `
    select ?s ?name (count (?s) as ?totalfights) where { 
        ?s ?p :Fighter;
            :Name   ?name;
            :participated ?fights .
    } 
    group by (?s) (?name)
    order by desc (?totalfights)
    limit 10
    `
    var result = await gdb.execQuery(query);
    result = result.results.bindings.map(bind => {
        return{
            Id: bind.s.value.split('#')[1],
            Name:bind.name.value,
            TotalFights:bind.totalfights.value
        }
      });
      res.status(200).jsonp(result);
});

/* Top 10 - Total Fights in MMA . */
router.get('career/mma-fights', async function (req, res, next) {
    var query = `
    select ?s ?name ( (?wins+?losses+?draws) as ?totalFights) where {
        ?s a :Fighter;
           :Name ?name;
           :Wins ?wins ;
           :Losses ?losses;
           :Draws ?draws .
    } 
    
    order by desc (?totalFights) 
    limit 10
    `
    var result = await gdb.execQuery(query);
    result = result.results.bindings.map(bind => {
        return{
            Id: bind.s.value.split('#')[1],
            Name:bind.name.value,
            TotalFights:bind.totalFights.value
        }
      });
      res.status(200).jsonp(result);
});







/* Top 10 - Wins . */
router.get('career/wins', async function (req, res, next) {
    var query = `
    select ?s ?name (Count (?fights) as ?wins ) where {
        ?s a :Fighter;
           :Name ?name;
           :won ?fights.          
    }     
group by ?s ?name
order by desc (?wins)
limit 10
    `
    var result = await gdb.execQuery(query);
    result = result.results.bindings.map(bind => {
        return{
            ID: bind.s.value.split('#')[1],
            Name:bind.name.value,
            Wins:bind.wins.value
        }
      });
      res.status(200).jsonp(result);
});



/* Title Fight Wins . */
router.get('career/title-fight-wins', async function (req, res, next) {
    var query = `
select ?s ?name (Count (?fight) as ?wins ) where {
        ?s a :Fighter;
           :Name ?name;
           :won ?fight.
    ?fight :Bout ?bout.
    
    FILTER REGEX (?bout,"title","i")
}     
 
group by ?s ?name
order by desc (?wins)
limit 10
    `
    var result = await gdb.execQuery(query);
    result = result.results.bindings.map(bind => {
        return{
            ID: bind.s.value.split('#')[1],
            Name:bind.name.value,
            Wins:bind.wins.value
        }
      });
      res.status(200).jsonp(result);
});



/* KO/TKO Wins . */
router.get('career/KO-TKO', async function (req, res, next) {
    var query = `
select ?s ?name (Count (?fight) as ?wins ) where {
        ?s a :Fighter;
           :Name ?name;
           :won ?fight.
    ?fight :Method ?method.
    
    FILTER REGEX (?method,"KO/TKO","i")
}     
 
group by ?s ?name
order by desc (?wins)
limit 10
    `
    var result = await gdb.execQuery(query);
    result = result.results.bindings.map(bind => {
        return{
            ID: bind.s.value.split('#')[1],
            Name:bind.name.value,
            Wins:bind.wins.value
        }
      });
      res.status(200).jsonp(result);
});


/* Submission Wins . */
router.get('career/submission-wins', async function (req, res, next) {
    var query = `
select ?s ?name (Count (?fight) as ?wins ) where {
        ?s a :Fighter;
           :Name ?name;
           :won ?fight.
    ?fight :Method ?method.
    
    FILTER REGEX (?method,"submission","i")
}     
 
group by ?s ?name
order by desc (?wins)
limit 10
    `
    var result = await gdb.execQuery(query);
    result = result.results.bindings.map(bind => {
        return{
            ID: bind.s.value.split('#')[1],
            Name:bind.name.value,
            Wins:bind.wins.value
        }
      });
      res.status(200).jsonp(result);
});

/* Finishes  */
router.get('career/finishes', async function (req, res, next) {
    var query = `
select ?s ?name (Count (?fight) as ?wins ) where {
        ?s a :Fighter;
           :Name ?name;
           :won ?fight.
    ?fight :Method ?method.
    
    FILTER REGEX (?method,"submission| KO/TKO","i") 
    }     
    
    group by ?s ?name
    order by desc (?wins)
    limit 10    
`
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        ID: bind.s.value.split('#')[1],
        Name:bind.name.value,
        Wins:bind.wins.value
    }
  });
  res.status(200).jsonp(result);
});




/* Decision  */
router.get('career/decision', async function (req, res, next) {
    var query = `
select ?s ?name (Count (?fight) as ?wins ) where {
        ?s a :Fighter;
           :Name ?name;
           :won ?fight.
    ?fight :Method ?method.
    
    FILTER REGEX (?method,"decision","i") 
}     
    group by ?s ?name
    order by desc (?wins)
    limit 10  
`
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        ID: bind.s.value.split('#')[1],
        Name:bind.name.value,
        Wins:bind.wins.value
    }
  });
  res.status(200).jsonp(result);
});


/* Strike Accuracy  */
router.get('career/strike-accuracy', async function (req, res, next) {
    var query = `
select distinct ?s ?name (xsd:double(?stracc) as ?strikes) where {
        ?s a :Fighter;
           :Name ?name;
           :participated ?fight;
           :StrAcc ?stracc.
}     

order by desc (?strikes)
limit 10
`
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        ID: bind.s.value.split('#')[1],
        Name:bind.name.value,
        Strikes:bind.strikes.value
    }
  });
  res.status(200).jsonp(result);
});


/* Strikes Landed Per Min  */
router.get('career/strikes-landed-per-min', async function (req, res, next) {
    var query = `
select distinct ?s ?name (xsd:double(?slpm) as ?strikes) where {
        ?s a :Fighter;
           :Name ?name;
           :participated ?fight;
           :SLpM ?slpm.
}     

order by desc (?strikes)
limit 10
`
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        ID: bind.s.value.split('#')[1],
        Name:bind.name.value,
        Strikes:bind.strikes.value
    }
  });
  res.status(200).jsonp(result);
});


/* Strike Defense  */
router.get('career/strike-defense', async function (req, res, next) {
    var query = `
select distinct ?s ?name (xsd:double(?strdef) as ?strikes) where {
        ?s a :Fighter;
           :Name ?name;
           :participated ?fight;
           :StrDef ?strdef.
}     
order by desc (?strikes)
limit 10
`
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        ID: bind.s.value.split('#')[1],
        Name:bind.name.value,
        Strikes:bind.strikes.value
    }
  });
  res.status(200).jsonp(result);
});


/* TakeDown Accuracy  */
router.get('career/takedown-accuracy', async function (req, res, next) {
    var query = `
select distinct ?s ?name (xsd:double(?tdacc) as ?takedowns) where {
        ?s a :Fighter;
           :Name ?name;
           :participated ?fight;
           :TDAcc ?tdacc.
}     

order by desc (?takedowns)
limit 10
`
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        ID: bind.s.value.split('#')[1],
        Name:bind.name.value,
        TakeDowns:bind.takedowns.value
    }
  });
  res.status(200).jsonp(result);
});



/* TakeDown Defense  */
router.get('career/takedown-defense', async function (req, res, next) {
    var query = `
select distinct ?s ?name (xsd:double(?tddef) as ?takedowns) where {
        ?s a :Fighter;
           :Name ?name;
           :participated ?fight;
           :TDDef ?tddef.
    
}     

order by desc (?takedowns)
limit 10
`
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        ID: bind.s.value.split('#')[1],
        Name:bind.name.value,
        TakeDowns:bind.takedowns.value
    }
  });
  res.status(200).jsonp(result);
});


/* Submission Average  */
router.get('career/submission-average', async function (req, res, next) {
    var query = `
select distinct ?s ?name (xsd:double(?subavg) as ?submission) where {
        ?s a :Fighter;
           :Name ?name;
           :participated ?fight;
           :SubAvg ?subavg.
}     

order by desc (?submission)
limit 10
`
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        ID: bind.s.value.split('#')[1],
        Name:bind.name.value,
        Submission:bind.submission.value
    }
  });
  res.status(200).jsonp(result);
});




/* =========================================================== */


/* =========================== FIGHT STATS ================================ */

/* Fastest Finish  */
router.get('fight/fastest-finish', async function (req, res, next) {
    var query = `
select  ?blue ?red ?time ?date ?name  where {
        ?s a :Fight;
           :Method ?method;
           :BlueCorner ?blue;
    	   :RedCorner  ?red;
           :Round      ?round;
           :belong     ?event;
           :Time       ?time .
   	    ?event :Date   ?date;
         	   :Name   ?name .
    
    FILTER REGEX (?method,"KO/TKO|Submission","i")
}     

order by asc (?round) (?time)
limit 10
`
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        Red: bind.red.value,
        Blue: bind.blue.value,
        Name: bind.name.value,
        Date: bind.date.value,
        Time: bind.time.value
    }
  });
  res.status(200).jsonp(result);
});



/* Fastest KO/TKO  */
router.get('fight/fastest-ko/tko', async function (req, res, next) {
    var query = `
select  ?blue ?red ?time ?date ?name  where {
        ?s a :Fight;
           :Method ?method;
           :BlueCorner ?blue;
    	   :RedCorner  ?red;
           :Round      ?round;
           :belong     ?event;
           :Time       ?time .
   	    ?event :Date   ?date;
         	   :Name   ?name .
    
    FILTER REGEX (?method,"KO/TKO","i")
}     

order by asc (?round) (?time)
limit 10

`
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        Red: bind.red.value,
        Blue: bind.blue.value,
        Name: bind.name.value,
        Date: bind.date.value,
        Time: bind.time.value
    }
  });
  res.status(200).jsonp(result);
});




/* Fastest Submission  */
router.get('fight/fastest-submission', async function (req, res, next) {
    var query = `
select  ?blue ?red ?time ?date ?name  where {
        ?s a :Fight;
           :Method ?method;
           :BlueCorner ?blue;
           :RedCorner  ?red;
           :Round      ?round;
           :belong     ?event;
           :Time       ?time .
           ?event :Date   ?date;
                :Name   ?name .
    
    FILTER REGEX (?method,"submission","i")
    }     
    
    order by asc (?round) (?time)
    limit 10
`
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        Red: bind.red.value,
        Blue: bind.blue.value,
        Name: bind.name.value,
        Date: bind.date.value,
        Time: bind.time.value
    }
  });
  res.status(200).jsonp(result);
});



/* Latest Finish  */
router.get('fight/latest-finish', async function (req, res, next) {
    var query = `
select  ?blue ?red ?time ?date ?name  where {
        ?s a :Fight;
           :Method ?method;
           :BlueCorner ?blue;
    	   :RedCorner  ?red;
           :Round      ?round;
           :belong     ?event;
           :Time       ?time .
   	    ?event :Date   ?date;
         	   :Name   ?name .
    
    FILTER REGEX (?method,"KO/TKO|Submission","i")
    FILTER  (?round="5")

}     

order by desc (?time)
limit 10

`
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        Red: bind.red.value,
        Blue: bind.blue.value,
        Name: bind.name.value,
        Date: bind.date.value,
        Time: bind.time.value
    }
  });
  res.status(200).jsonp(result);
});



/* Latest KO/TKO  */
router.get('fight/latest-ko-tko', async function (req, res, next) {
    var query = `
select  ?blue ?red ?time ?date ?name  where {
        ?s a :Fight;
           :Method ?method;
           :BlueCorner ?blue;
    	   :RedCorner  ?red;
           :Round      ?round;
           :belong     ?event;
           :Time       ?time .
   	    ?event :Date   ?date;
         	   :Name   ?name .
    
    FILTER REGEX (?method,"KO/TKO","i")
    FILTER  (?round="5")

}     

order by desc (?time)
limit 10

`
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        Red: bind.red.value,
        Blue: bind.blue.value,
        Name: bind.name.value,
        Date: bind.date.value,
        Time: bind.time.value
    }
  });
  res.status(200).jsonp(result);
});

/* Latest Submission  */
router.get('fight/latest-submission', async function (req, res, next) {
    var query = `
select  ?blue ?red ?time ?date ?name  where {
        ?s a :Fight;
           :Method ?method;
           :BlueCorner ?blue;
    	   :RedCorner  ?red;
           :Round      ?round;
           :belong     ?event;
           :Time       ?time .
   	    ?event :Date   ?date;
         	   :Name   ?name .
    
    FILTER REGEX (?method,"submission","i")
    FILTER  (?round="5")
}     

order by desc (?time)
limit 10

`
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        Red: bind.red.value,
        Blue: bind.blue.value,
        Name: bind.name.value,
        Date: bind.date.value,
        Time: bind.time.value
    }
  });
  res.status(200).jsonp(result);
});


/* Knockdowns Landed  */
router.get('fight/knockdows-landed', async function (req, res, next) {
    var query = `
select ?s ?blue ?red ?time ?date ?name ( xsd:int(?bluekd)+xsd:int(?redkd) as ?knockdowns)  where {
        ?s a :Fight;
           :Method ?method;
           :BlueCorner ?blue;
    	   :RedCorner  ?red;
           :BlueCornerKD ?bluekd;
           :RedCornerKD  ?redkd;
           :Round      ?round;
           :belong     ?event;
           :Time       ?time .
   	    ?event :Date   ?date;
         	   :Name   ?name .
}     

order by desc (?knockdowns)
limit 10

`
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        Red: bind.red.value,
        Blue: bind.blue.value,
        Name: bind.name.value,
        Date: bind.date.value,
        Time: bind.time.value,
        Knockdows : bind.knockdowns.value
    }
  });
  res.status(200).jsonp(result);
});


/* =========================================================== */



/* =========================== EVENT STATS ================================ */

/* KO/TKO Wins */

router.get('event/ko-tko', async function (req, res, next) {
    var query = `
select ?event ?name  ?date   (count (?s) as ?fights)  where {
        ?s a :Fight;
           :Method  ?method;
           :belong  ?event.
       ?event :Date    ?date;
            :Name    ?name .

FILTER REGEX (?method,"KO/TKO","i")
}     

group by ?event  ?name ?date
order by desc (?fights)
limit 10

`
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        ID: bind.event.value.split('#')[1],
        Name: bind.name.value,
        Date: bind.date.value,
        Knockdows: bind.fights.value,
    }
  });
  res.status(200).jsonp(result);
});



/* Submission Wins */

router.get('event/submission-wins', async function (req, res, next) {
    var query = `
select ?event ?name  ?date   (count (?s) as ?fights)  where {
        ?s a :Fight;
           :Method  ?method;
           :belong  ?event.
       ?event :Date    ?date;
            :Name    ?name .

FILTER REGEX (?method,"submission","i")
}     

group by ?event  ?name ?date
order by desc (?fights)
limit 10

`
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        ID: bind.event.value.split('#')[1],
        Name: bind.name.value,
        Date: bind.date.value,
        Submissions: bind.fights.value,
    }
  });
  res.status(200).jsonp(result);
});


/* Decision Wins */

router.get('event/decision-wins', async function (req, res, next) {
    var query = `
select ?event ?name  ?date   (count (?s) as ?fights)  where {
        ?s a :Fight;
           :Method  ?method;
           :belong  ?event.
       ?event :Date    ?date;
            :Name    ?name .

FILTER REGEX (?method,"decision","i")

}     

group by ?event  ?name ?date
order by desc (?fights)
limit 10

`
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        ID: bind.event.value.split('#')[1],
        Name: bind.name.value,
        Date: bind.date.value,
        Decision: bind.fights.value,
    }
  });
  res.status(200).jsonp(result);
});

/* =========================================================== */


/* =========================== LOCATION STATS ================ */

/* Countries,Cities and States with most events  */

router.get('location/', async function (req, res, next) {
    var query = `
select   ?country ?city ?state (count(?s) as ?events) where {

        ?s a :Location;
           :hadThe  ?event;
           :Country ?country;
           :City ?city .

        optional{
             ?s  :State ?state .
            }
    }     
    
    group by ?s ?country ?city ?state
    order by desc (?events)
    limit 10
    
`
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        Country: bind.country.value,
        City: bind.city.value,
        State: bind.state.value,
        Events: bind.events.value,
    }
  });
  res.status(200).jsonp(result);
});

/* =========================================================== */

/* =========================  Referee STATS  ================= */

/* Referee with most fights  */
router.get('referee/', async function (req, res, next) {
    var query = `
    select ?name (count (?fight) as ?fights) where {
        ?s a :Referee;
           :arbitrated ?fight;
           :Name ?name .
    }
    group by  ?s ?name
    order by desc (?fights)
    limit 10
`
var result = await gdb.execQuery(query);
result = result.results.bindings.map(bind => {
    return{
        Name: bind.name.value,
        Fights: bind.fights.value
    }
  });
  res.status(200).jsonp(result);
});

/* =========================================================== */


module.exports = router;