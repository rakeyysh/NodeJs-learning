
const http = require('http');
const myURL1 = new URL("https://localhost:3000/about?p=8&&b=10");

// console.log(myURL1.searchParams.has('a'));
// console.log(myURL1.searchParams.get('b'));


const myServer = http.createServer((req,res)=>{

    console.log(req.headers);

    res.end("THANK YOU");
})

myServer.listen(3000);