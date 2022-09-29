import http from "http"
import fs, { read } from "fs"
import events from 'events'
import e from "express";
const server = http.createServer(function(req,res){
 
    let eventEmitter = new events.EventEmitter();
     eventEmitter.on("something",function(){
        console.log("hello world")
     })
     eventEmitter.emit("something");
     res.end();
})

server.listen(8000,'127.0.0.1');
console.log("server is running 127.0.0.1 port 8000")

