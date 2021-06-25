var mongoose = require('mongoose');
var Prediction = require('../models/predictions');
var mydate = require('../modules/date');

// Devolve a lista de previsões
module.exports.list = ()=>{
    return Prediction 
        .find()
        .sort('-date')
        .exec()
}

// Permite inserir uma prediction
module.exports.insert = prediction =>{
    prediction.date=mydate.myDateTime(new Date().toISOString().substr(0, 16));
    var newPrediction = new Prediction (prediction);
    return newPrediction.save()
}
