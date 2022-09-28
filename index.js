import http from "http"
import fs from "fs"
const server = http.createServer(function(req,res){
 
   fs.writeFile("writeAsync.txt","Aung Kyaw Khaing",(err)=>{
      if(!err)console.log("success")
   })
   fs.writeFileSync("world.txt","akk");
   fs.writeFileSync('tt.txt',"hel");
   res.end()
})

server.listen(8000,'127.0.0.1');
console.log("server is running 127.0.0.1 port 8000")


