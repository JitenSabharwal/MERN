const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
  firstName: {type: String, required: true, max: 100},
  lastName: String,
  birthDate: {type: Date, required: true},
  hobbies: [{type: String}],
  profilePic: String,
}, {collection: 'users'})

module.exports = model('users', UserSchema, 'users')
