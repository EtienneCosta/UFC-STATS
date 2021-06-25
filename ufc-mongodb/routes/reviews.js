var express = require('express');
var router = express.Router();
var Review = require('../controllers/reviews');

router.get('/', function(req, res) {
  Review.list()
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
});


router.post('/', function(req, res){
  Review.insert(req.body)
    .then(dados => res.status(201).jsonp({dados: dados}))
    .catch(e => res.status(500).jsonp({error: e}))
})
module.exports = router;