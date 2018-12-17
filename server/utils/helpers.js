const moment = require('moment')
/**
 * Parse function to prepare output json
 * @param {object} obj {data: <object>, error:<boolean>, errorMsg: <String>}
 */
const parse = obj => {
  const result = {
    success: true,
  }
  if (obj.error) {
    result.success = false
    result.error = obj.error
  }
  result.data = obj.data
  return result
}
/**
 * Function recieves an object of user props
 * and it just validates and do basic modification
 * @param {object} obj {
      firstName: String,
      lastName: String,
      birthDate: Date/String(DD/MM/YYYY),
      hobbies: [''],
      profilePic: String,
    }
 */
const formatUser = obj => {
  const user = {
    ...obj,
  }
  if (user.birthDate && typeof user.birthDate === 'string') {
    user.birthDate = moment(user.birthDate, 'YYYY-MM-DD').toDate()
  }
  try {
    user.hobbies = JSON.parse(user.hobbies)
  } catch (e) {
    if (user.hobbies && typeof user.hobbies === 'string') {
      user.hobbies = user.hobbies.split(',').map(a => a.trim())
    }
  }
  return user
}

const outputUser = (req, obj) => {
  try {
    const user = {
      _id: obj._id,
      firstName: obj.firstName,
      lastName: obj.lastName || '',
      hobbies: obj.hobbies,
      birthDate: obj.birthDate,
    }
    const baseUrl = req.protocol + '://' + req.get('host')
    user.birthDate = moment(user.birthDate).format('YYYY-MM-DD')
    user.hobbies = (user.hobbies || []).join(', ')
    user.profilePic = `${baseUrl}/${obj.profilePic || 'uploads/default.jpeg'}`
    return user
  } catch (e) {
    console.log(e)
  }
}
module.exports = {
  parse,
  formatUser,
  outputUser,
}
