var mongoose = require('mongoose');
var Review = require('../models/reviews');
var mydate = require('../modules/date');

// Devolve a lista de reviews
module.exports.list = ()=>{
    return Review 
        .find()
        .sort('-date')
        .exec()
}


// Permite inserir uma review
module.exports.insert = review =>{
    review.date=mydate.myDateTime(new Date().toISOString().substr(0, 16));
    var newReview = new Review (review);
    return newReview.save()
}
