const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recipeSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String },
  imagepath: { type: String },
  cuisine: { type: String },
  ingredients: { type: String },
  description: { type: String },
  descriptionmethod: { type: String },
  categrory: { type: String },
  type: { type: String },
  servingsuggestion: { type: String },
  duration: { type: String },
  keywords: { type: String },
  submittedBY: { type: String },
})
const Recipes = mongoose.model('recipes', recipeSchema)
module.exports = Recipes
