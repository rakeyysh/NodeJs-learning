
const myURL = new URL("https://github.com/rakeyysh?lang=js&repo0=NodeJS");


// console.log(myURL);
// console.log(myURL.hostname);
// console.log(myURL.pathname);
// console.log(myURL.searchParams);
// console.log(myURL.port);
console.log(myURL.searchParams.has('repo'));

const http = require("http");


const myServer = http.createServer((req,res)=>{
    
    console.log(req.method);
    const url = myURL;

   // if(req.method == "GET") res.end("Ok GET request has been requested");
    if(myURL.searchParams.has("repo"))
        res.end("Hi You will get the repo!");

    else{
        res.end("You got wrong");
    }
})


myServer.listen(3000);
