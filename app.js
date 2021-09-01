const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = express.Router()
const Users = require('./routes/users')
const Sessions = require('./routes/sessions')
const Recipes = require('./routes/recipes')
const Cuisines = require('./routes/cuisines')
const Upload = require('./routes/upload')
const bcrypt = require('bcrypt')

const app = express()
app.set('view engine', 'ejs')

const mongodb =
  'mongodb://stirrupUser:stirrupPassword@127.0.0.1:27017/STIRRUP?authSource=STIRRUP&readPreference=primary&appname=MongoDB%20Compass&ssl=false' //set up a default connection//

mongoose.connect(mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Mongodb connection error:'))
db.once('open', (err, resp) => {
  console.log('connected')
})
app.use(express.json())
app.use(helmet())
app.use(cors())

app.use('/users', Users)

console.log('POST')
app.use('/sessions', Sessions)
console.log('GET')
app.use('/recipes', Recipes)
app.use('/cuisines', Cuisines)
app.use('/upload', Upload)
app.use((error, req, res, next) => {
  return res.json(500)
})

app.listen(7001, () => {
  console.log('listening to server')
})
