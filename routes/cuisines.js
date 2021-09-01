const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  console.log('cuisines')
  res.send('returns list of cuisines')
})

module.exports = router
