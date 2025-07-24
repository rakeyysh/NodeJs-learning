

const express = require("express");  // importing express
const app = express();              // intializing the app


app.get('/rakesh',(req,res)=>{
    console.log(req.query);

    res.send(`You came to this Page + ${req.params.id}`);
})



app.listen(7000,()=>{
    console.log("Looking Good!");
})



