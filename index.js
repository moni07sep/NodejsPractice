let username = require("./logger")
const os =require('os')
const path =require('path')
const fs= require('fs');
const EventEmitter = require('events')
let events=new EventEmitter()
const http= require('http')

let server1=http.createServer();
server1.listen(4800)

// events.on("messageloaded" ,(arg)=>{
//     console.log(arg)
// })

// events.emit("messageloaded", {name:"abc", profile:"xyz"})

// let server= http.createServer((req,res)=>{
//     if (req.url=="/"){
//         res.write("hello monika");
//         res.end();  
//     }
// })

// console.log(username);
// console.log(module)

// username("monika");
// let totalmemory =os.totalmem();
// console.log(totalmemory);

// let freememeory = os.freemem();
// console.log(freememeory );

// let file =path.parse(__filename)
// console.log(file)   

// fs.readdir("./",(err, file)=>{
//     if (err){console.log(`somthing went worng ${err.message}`)}
//     if (file){console.log(file)}
// })

