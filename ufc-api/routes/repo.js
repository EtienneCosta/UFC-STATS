var express = require('express');
var router = express.Router();
var axios = require('axios');
var gdb = require('../utils/graphdb');

/* Details of a fight . */
router.get('/', async function (req, res, next) {

    axios.get('http://localhost:7200/rest/repositories/ufc/size')
        .then( r =>{
            res.status(200).jsonp(r.data);
        })
        .catch(e=>{
            res.status(500).jsonp(e);
        });
});


module.exports = router;