const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const mongoDb = require('./utils/db/mongo')
// Routers
const user = require('./routes/user')

module.exports = function () {
// Initializing the application server
  const app = express()
  // view engine setup
  app.set('views', path.join(__dirname, '../views'))
  app.use('/uploads', express.static(path.join(__dirname, '../uploads/')))
  app.use(express.static(path.join(__dirname, '../client/build/')))
  app.set('view engine', 'pug')
  app.use(logger('dev'))
  app.use(express.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(helmet())
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
  })
  // Routers
  app.use('/api/v1/user', user)
  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404))
  })
  // error handler
  app.use((err, req, res, next) => {
  // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
  })
  return app
}
