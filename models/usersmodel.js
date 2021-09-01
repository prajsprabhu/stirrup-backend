const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto')

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Enter a username.'],
    unique: [true, 'That username is taken.'],
    sparse: true,
  },
  email: { type: String, required: true },
  contact: { type: Number, required: true },
  hash: { type: String },
  salt: { type: String },
})
userSchema.index({ username: 1 })
//Method to set salt and hash the password for a user//
//setPassword method first creates a salt for every user//
//then it hash the salt with user password and creates a hash//
//this hash is stored in database as user password//
userSchema.methods.setPassword = function (password) {
  //creates a unique salt for particular use//
  this.salt = crypto.randomBytes(16).toString('hex')
  //Hasing user's salt and password with 1000 iterations, 64 length and sha512 digest
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`)
  console.log(this.hash)
}
userSchema.methods.validPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString('hex')
  console.log(hash)
  console.log(`sethash ${this.hash}`)
  return this.hash === hash
}
const User = mongoose.model('user', userSchema)
module.exports = User
