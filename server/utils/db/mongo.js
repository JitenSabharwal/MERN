const mongoose = require('mongoose')
const config = require('../../../config/config')
const logger = require('../logger/logger')
mongoose.Promise = global.Promise
const _nodeEnv = process.env.NODE_ENV || 'dev'
const {mongoUrl} = config[_nodeEnv]
const connection = mongoose.connect(mongoUrl)
connection
  .then(db => {
    logger.info(
      `Successfully connected to ${mongoUrl} MongoDB cluster in ${
        config.env
      } mode.`
    )
    return db
  })
  .catch(err => {
    if (err.message.code === 'ETIMEDOUT') {
      logger.info('Attempting to re-establish database connection.')
      mongoose.connect(config.mongoUrl)
    } else {
      logger.info('Error while attempting to connect to database:')
      logger.error(err.toString())
    }
  })

module.exports = connection
