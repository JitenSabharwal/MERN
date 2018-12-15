const express = require('express')
const router = express.Router()
const {
  addUser,
  findUser,
  findUsers,
  updateUser,
  removeUser,
  removeAllUser,
} = require('../controllers/user')

const { parse } = require('../utils/helpers')
const log = require('../utils/logger/logger')
const upload = require('../utils/db/storage')

/**
 * Get Request: To get all the Users
 */
router.get('/', (req, res, next) => {
  findUsers().then(parse).then(result => res.send(result)).catch(e => {
    log.error(e)
    res.send(parse({ error: e }))
  })
})

/**
 * Get Request: To get User of given Id
 */
router.get('/get/:id', (req, res, next) => {
  findUser(req).then(parse).then(result => res.send(result)).catch(e => {
    log.error(e)
    res.send(parse({ error: e }))
  })
})

/**
 * POST Request: To add a new user
 */
router.post('/addUser/', upload.single('profilePic'), (req, res, next) => {
  addUser(req)
    .then(parse)
    .then(result => res.send(result))
    .catch(e => {
      log.error(e)
      res.send(parse({ error: e }))
    })
})
/**
 * POST Request: To update a given user
 */
router.post('/updateUser/:id', upload.single('profilePic'), (req, res, next) => {
  updateUser(req)
    .then(parse)
    .then(result => res.send(result))
    .catch(e => {
      log.error(e)
      res.send(parse({ error: e }))
    })
})

/**
 * POST Request: To remove a user
 */
router.post('/removeUser/:id', (req, res, next) => {
  removeUser(req.params.id)
    .then(resp => {
      res.send(parse(resp))
    })
    .catch(e => {
      const result = {}
      result.error = e.toString()
      res.send(parse(result))
    })
})

/**
 * POST Request: To remove all the users
 */
router.post('/removeAllUsers/', (req, res, next) => {
  removeAllUser()
    .then(resp => {
      res.send(parse(resp))
    })
    .catch(e => {
      const result = {}
      result.error = e.toString()
      res.send(parse(result))
    })
})

module.exports = router
