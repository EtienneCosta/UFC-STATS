var express = require('express');
var router = express.Router();
var axios = require('axios');
var gdb = require('../utils/graphdb');

/* Details of a fight . */
router.get('/', async function (req, res, next) {
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



module.exports = router;