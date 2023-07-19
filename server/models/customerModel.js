const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema
const customerSchema = new Schema({
  name: {
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
  },
  rewardPoints: {
    type: Number,
    required:[true,"Add the number of the item "],
    default: 0,
    min: [0, "Reward points cannot be less than 0"],
  },
});
customerSchema.statics.signup = async function(name, email, password ) {
  if ( !name || !email || !password) {
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
  const customer = await this.create({name, email, password: hash })
  return customer
}
// static login method
customerSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const customer = await this.findOne({ email })
  if (!customer) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, customer.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return customer
}

module.exports = mongoose.model('Customer', customerSchema)