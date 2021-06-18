var express = require('express');
var router = express.Router();
var axios = require('axios');
var gdb = require('../utils/graphdb');

/* List all fighters */
router.get('/', async function (req, res) {
    var query = `
    select ?s ?name ?nickname ?height ?weight ?reach ?stance ?wins ?losses ?draws  ?belt
    ?dob ?sapm ?slpm ?stracc ?strdef ?subavg ?tdacc ?tdavg ?tddef  where { 
        ?s a :Fighter ;
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
    }
    order by ?name
`

    var result = await gdb.execQuery(query);

        result = result.results.bindings.map(bind => {
            return{
              id: bind.s.value.split('#')[1],
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
 
})


/* Get the name of all fighters */

router.get('/names', async function (req, res) {
  var query = `
  select ?name where {
    ?s a :Fighter;
    		:Name ?name.
}
    order by ?name`

  var result = await gdb.execQuery(query);
      result = result.results.bindings.map(bind => {
          return{
            name:bind.name.value,
          }
        });
        console.log(result)
        res.status(200).jsonp(result);

})

module.exports = router;