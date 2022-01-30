const { readFileSync , writeFileSync} = require('fs')

console.log("start")
const first = readFileSync('./first.txt','utf8')
const sec = readFileSync('./sec.txt','utf8')

//console.log(first,sec)

writeFileSync('./res2.txt',`Here is the result : ${first},${sec}`,{flag:'a'})
console.log("Done with the task")
console.log("Starting the next one")