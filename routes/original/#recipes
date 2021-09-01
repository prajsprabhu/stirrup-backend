const express = require('express')
const Recipes = require('../models/recipemodel')
const router = express.Router()
const recipes = require('../models/recipemodel')

router.get('/', function (req, res) {
  console.log('here')
  // get all recipes from Mongo
  recipes.find((err, recipes) => {
    if (err) {
      console.log('error')
      res.json({ error: 'error' })
    } else {
      console.log(recipes)
      res.json({ recipes })
    }
  })
})

router.get('/:id', async (req, res) => {
  recipes.findOne({ id: req.params.id }, (err, recipes) => {
    if (err) {
      console.log('error')
      res.json({ error: 'error' })
    } else {
      console.log(recipes)
      res.json({ recipes })
    }
  })
})

router.post('/', async function (req, res) {
  console.log(req)

  const id = req.body.id
  const title = req.body.title
  const imagepath = req.body.imagepath
  const cuisine = req.body.cuisine
  const ingredients = req.body.ingredients
  const description = req.body.description
  const descriptionmethod = req.body.descriptionmethod
  const category = req.body.category
  const type = req.body.type
  const servingsuggestion = req.body.servingsuggestion
  const duration = req.body.duration
  const keywords = req.body.keywords
  const submittedBY = req.body.submittedBY
  const recipe = new recipes()
  recipe.id = id
  recipe.title = title
  recipe.imagepath = imagepath
  recipe.cuisine = cuisine
  recipe.ingredients = ingredients
  recipe.description = description
  recipe.descriptionmethod = descriptionmethod
  recipe.category = category
  recipe.type = type
  recipe.servingsuggestion = servingsuggestion
  recipe.duration = duration
  recipe.keywords = keywords
  recipe.submittedBy = submittedBY

  await recipe.save()

  res.json({ done: 'done' })
})

router.put('/:id', async (req, res) => {
  //update the existing recipes//

  recipes.findOneAndUpdate({ id: req.params.id }, req.body, (err, recipes) => {
    console.log(req.body)

    if (err) {
      console.log(err)
      res.json({ updateSuccess: false, message: 'Recipe Update failed' })
    } else {
      if (recipes) {
        console.log(recipes)
        res.json({ updateSuccess: true })
      } else {
        res.json({ updateSuccess: false, message: 'Recipe Update failed' })
      }
    }
  })
})

module.exports = router
