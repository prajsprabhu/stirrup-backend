const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto')
const sessionsSchema = new Schema({
  username: { type: String },
  jwttoken: { type: String },
})

const Session = mongoose.model('sessions', sessionsSchema)
module.exports = Session
