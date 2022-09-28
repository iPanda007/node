import http from "http"
import fs from "fs"
const server = http.createServer(function(req,res){
    fs.unlink('tt.txt',function(err){
         if(!err)console.log("success")
    })
    res.end()
})

server.listen(8000,'127.0.0.1');
console.log("server is running 127.0.0.1 port 8000")

