const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema
const adminSchema = new Schema({
  aname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})
// static signup method
adminSchema.statics.signup = async function(aname ,email, password) {

  // validation
  if ( !aname || !email || !password ) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  const admin = await this.create({ aname, email, password: hash })
  return admin
}
// static login method
adminSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  const admin = await this.findOne({ email })
  if (!admin) {
    throw Error('Incorrect email')
  }
  const match = await bcrypt.compare(password, admin.password)
  if (!match) {
    throw Error('Incorrect password')
  }
  return admin
}
module.exports = mongoose.model('Admin', adminSchema)