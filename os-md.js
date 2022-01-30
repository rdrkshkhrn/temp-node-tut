const os = require('os')
//const {os} = require('os')
//console.log(os.userInfo())
//console.log('The system uptime is ' + os.uptime() + 'seconds')
//console.log(`The system uptime is ${os.uptime()} seconds`)

const currentos = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentos)