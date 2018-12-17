const server = require('../server/server')
const port = process.env.PORT || 8000
const app = server()
app.listen(port, () => {
  console.log('running at localhost: ' + port)
})
