const User = require('../models/user')
const proj = 'firstName lastName hobbies birthDate profilePic'
const mongoose = require('mongoose')
const {formatUser} = require('../utils/helpers')
/**
 * Function to add a new User
 * @param {object} req
 */
const addUser = (req) => {
  return new Promise((resolve, reject) => {
    const { body, file = false } = req
    const { firstName, lastName, birthDate, hobbies = [] } = body
    const _user = {
      firstName,
      lastName,
      birthDate,
      hobbies: JSON.parse(hobbies),
    }
    if (file) {
      _user.profilePic = file.path
    }
    const user = new User(_user)
    return user.save((err, resp) => {
      if (err) reject(err)
      else resolve({ data: resp })
    })
  })
}

/**
 * Function to update an existing User
 * @param {object} req
 */
const updateUser = (req) => {
  return new Promise((resolve, reject) => {
    const { body, params } = req
    const id = mongoose.Types.ObjectId(params.id)
    const update = {
      $set: formatUser(body),
    }
    User.updateOne({_id: id}, update, (err, resp) => {
      if (err) reject(err)
      else {
        resolve({data: 'Updated Successfully'})
      }
    })
  })
}

/**
 * Function to all Users
 */
const findUsers = () => {
  return new Promise((resolve, reject) => {
    User.find({}, proj, (err, resp) => {
      if (err) reject(err)
      return resolve({ data: resp })
    })
  })
}
/**
 * Function to find User of given id
 * @param {string} id
 */
const findUser = (req) => {
  return new Promise((resolve, reject) => {
    const {params} = req
    const id = mongoose.Types.ObjectId(params.id)
    User.findById(id, (err, resp) => {
      if (err) reject(err)
      return resolve({ data: resp })
    })
  })
}

/**
 * Function to remove User of given id
 * @param {string} id
 */
const removeUser = (id) => {
  return new Promise((resolve, reject) => {
    id = mongoose.Types.ObjectId(id)
    User.deleteOne({ _id: id }, (err, resp) => {
      if (err) reject(err)
      return resolve({ data: 'Done' })
    })
  })
}

/**
 * Function to remove User of given id
 * @param {string} id
 */
const removeAllUser = () => {
  return new Promise((resolve, reject) => {
    User.deleteMany({}, (err, resp) => {
      if (err) reject(err)
      return resolve({ data: 'Done' })
    })
  })
}
module.exports = {
  addUser,
  findUsers,
  findUser,
  updateUser,
  removeUser,
  removeAllUser,
}
