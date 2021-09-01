const express = require('express')
const router = express.Router()
const sessions = require('../models/sessionsmodel')
const users = require('../models/usersmodel')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'sopwerjkadukejoweyeiweudsdsldhfdls89898e$%$#$Y^#&*gnmb'

router.post('/', async function (req, res) {
  console.log(req)
  try {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    console.log(username)
    //get the users findOne using the username
    users.findOne({ username: username }, async (err, user) => {
      console.log(err)
      console.log(user)
      if (err) {
        res.json({
          loginSuccess: false,
          message: 'Login failed, username and password incorrect',
        })
      }
      //if no errors, then verify using user.validatePassword (password)

      if (user && user.validPassword(password)) {
        // if validatepassword is true, then create sessions object
        const session = new sessions()
        //add username to sessions object

        session.username = username

        //create jwttoken based on username TODO
        const token = jwt.sign(
          { jwttoken: session.jwttoken, username: user.username },
          JWT_SECRET
        )

        //add jwttoken to sessions object

        session.jwttoken = 'jwttoken'
        //save session object
        await session.save()
        res.json({
          loginSuccess: true,
          sessionid: session.jwttoken,
          token: token,
        })
      }

      res.json({
        loginSuccess: false,
        message: 'Login failed, username and password incorrect',
      })
    })

    //else, user doesn't exists. Login failed flow res.json (loginfaiked)
  } catch (error) {
    console.log(error)
    res.json({
      loginSuccess: false,
      message: 'Login failed, username and password incorrect',
    })
  }
})

module.exports = router
