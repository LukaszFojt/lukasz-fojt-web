const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const placeSchema = new Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  title: String,
  summary: String,
  photos: [String],
  content: String,
  categories: [String],
  tags: String,
});

const PlaceModel = model('Place', placeSchema);

module.exports = PlaceModel;