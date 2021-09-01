const express = require('express')
const router = express.Router()
const users = require('../models/usersmodel')

router.post('/', async function (req, res) {
  try {
    console.log(req.body)
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    const contact = req.body.contact
    const user = new users()
    user.username = username
    user.email = email
    user.contact = contact
    user.setPassword(password)
    console.log('test')

    await user.save()
    res.json({ registerSucess: true })
  } catch (error) {
    console.log(error)
    res.json({
      registerSuccess: false,
      message: 'Registration failed, please try again',
    })
  }
})

module.exports = router
