const mongoose = require('mongoose');

// Predictions Schema
const predictionsSchema = mongoose.Schema({
  date:{type: String,required: true},
  underdog:{type: String,required: true},
  favourite:{type: String,required: true},
  winner:{type: String,required: true},
  confidence:{type:String,required:true}
});

module.exports = mongoose.model('predictions', predictionsSchema);