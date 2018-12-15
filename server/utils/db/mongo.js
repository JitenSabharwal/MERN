const mongoose = require('mongoose')
const config = require('../../../config/config')
const logger = require('../logger/logger')
mongoose.Promise = global.Promise

const connection = mongoose.connect(config.mongoUrl)

connection
  .then(db => {
    logger.info(
      `Successfully connected to ${config.mongoUrl} MongoDB cluster in ${
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
      logger.error('Error while attempting to connect to database:')
      logger.error(err)
    }
  })

module.exports = connection
