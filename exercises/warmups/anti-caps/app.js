function antiCaps(str){
    var result = ""
    for(var i = 0; i < str.length; i++){
        result += (str[i] === str[i].toUpperCase()) ? str[i].toLowerCase() : str[i].toUpperCase()
    }
    return result;
}
console.log(antiCaps('bAnAnA'))


const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer(function(re1, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
})

server.listen(port, hostname, function() {
    console.log('Server running at http://' + hostname + ':' + port + '/')
})