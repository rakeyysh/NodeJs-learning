

const http = require("http");

const server =  http.createServer((req,res)=>{

    console.log(req);

   if(req.url === "/")
    res.end("Hello Namaste This is NodeJS Bootcamp");

   if(req.url === "/about")
    res.end("Rakesh Mishra ");

   if(req.url === "/education")
    res.end("Software Engineer");
})


server.listen(3000,()=>{
    console.log("we are hosting on server 3000");
})
