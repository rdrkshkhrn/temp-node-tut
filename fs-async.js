const {readFile,writeFile} = require('fs')

readFile ('./first.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err)
        return
    }
    const first = result
    readFile('./sec.txt','utf8',(err,result)=>{
        if(err)
        {
            console.log(err)
            return
        }
        const sec=result
        writeFile(
            './res3-async.txt',
            `Here is the result : ${first} ${sec}`,(err,result)=>{
                if(err)
                {
                    console.log(err)
                    return
                }
                else
                {
                    console.log(result)
                }
            }
            )
    })
})
