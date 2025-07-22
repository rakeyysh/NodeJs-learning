const fs = require("fs");
const os = require("os");


// Synchronous file
// fs.writeFileSync("./test.txt","Helllo World");


// Asynchronous file


// fs.writeFile("./test.txt","Hello Namaste",(err)=>{})


//Synchronous
    // const result = fs.readFileSync("./contacts.txt", "utf-8");


    //Asynchronous

    // fs.readFile("./contacts.txt","utf-8",(err,value)=>{

    //     if(err){
    //         console.log("Error",err);
    //     }
    //     else{
    //         console.log(value);
    //     }

    // })


    // fs.appendFileSync("./contacts.txt",`Akshay : 91123\n`);
    
 // to create copy of any file
    // fs.copyFileSync("./test.txt","./copy.txt");

// to delete the copy file
    // fs.unlinkSync("./copy.txt");


    // to know all the info about any file
    // console.log(fs.statSync("./test.txt"));


    console.log(os.cpus().length);
    
       
   


     

