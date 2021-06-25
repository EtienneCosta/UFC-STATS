const mongoose = require('mongoose');

// Review Schema
const reviewSchema = mongoose.Schema({
  name:{type: String,required: true},
  email:{type: String,required: true},
  date:{type: String,required: true},
  review:{type: String,required: true}

});

module.exports = mongoose.model('reviews', reviewSchema);