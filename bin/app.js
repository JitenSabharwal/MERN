var server = require('../server/server');
var port = 8000
const app  = server()
app.listen(port, function() {
 console.log('running at localhost: ' + port);
});