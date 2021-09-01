const express = require('express')
const router = express.Router()
const recipes = require('../models/recipemodel')

router.get('/', function (req, res) {
  console.log('here')
  res.json({
    id: '123456',
    title: 'Rasagulla',
    imagepath: 'image',
    cuisine: 'Bengali',
  })
})

router.get('/:id', function (req, res) {
  res.json({ id: '123456' })
})

router.post('/', async function (req, res) {
  console.log('posting')
  try {
    console.log('post')
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
    const duration = req.body.duration
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
  } catch (error) {
    console.log(error)
  }
})
router.put('/', function (req, res) {
  console.log('updated recipe')
  res.send('updates the existing recipe')
})

module.exports = router
