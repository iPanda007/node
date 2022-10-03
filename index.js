import http from "http"
import fs, { read } from "fs"
import express from "express";
import mongodb, { ObjectId } from 'mongodb'
const server = http.createServer(function(req,res){
  let url = "mongodb://localhost:27017";
  let mongoClient =   mongodb.MongoClient;
    if(req.url == '/create-db'){

        mongoClient.connect(url,function(err,database){
            let dbo =  database.db("Aung");
            dbo.createCollection("users",function(err,res){
                if(!err)console.log("create collection successfully")
            });

        })
    }else if(req.url === "/create"){
      
           let data =[
            {name:"Aung Aung",email:"aung@gmail.com"},
            {name:"Tun Tun",email:"tun@gmail.com"}
           ]
          mongoClient.connect(url,function(err,database){
              let dbo = database.db("Aung");
                dbo.collection("users").insertMany(data,function(err,result){
                             if(!err){
                                  console.log(result)
                             }
                             database.close()
                }) 
          })
    }else if(req.url ==="/find"){
          mongoClient.connect(url,function(err,database){
                       let dbo = database.db("Aung");
                       let query = {_id:ObjectId("633af7ed4720b580aa88a229")}
                       dbo.collection("users").find(query).toArray(function(err,result){
                            if(!err){
                                console.log(result);
                            }
                       })    
          })
    }else if(req.url === "/update"){
        mongoClient.connect(url,function(err,database){
              let dbo = database.db("Aung");
              let query = {_id: ObjectId("633af7ed4720b580aa88a229")}
              let updateData ={$set:{name:"Kyaw Kyaw  Update"}}
              dbo.collection("users").updateOne(query,updateData,function(err,result){
                  if(!err){
                     console.log(result)
                  }
              })
        })
    }
  res.end()
})

server.listen(8000,'127.0.0.1');
console.log("server is running 127.0.0.1 port 8000")

