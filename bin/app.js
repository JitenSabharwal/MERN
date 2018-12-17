const server = require('../server/server')
const port = 8080
const app = server()
app.listen(process.env.PORT || port, () => {
  console.log('running at localhost: ' + port)
})
