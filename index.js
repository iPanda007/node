import http from "http"
import fs, { read } from "fs"
import express from "express";
import mongodb from 'mongodb'
const server = http.createServer(function(req,res){
    if(req.url == '/create-db'){
      let mongoClient =   mongodb.MongoClient;
        let url = "mongodb://localhost:27017/db";
      mongoClient.connect()
    }
 
})

server.listen(8000,'127.0.0.1');
console.log("server is running 127.0.0.1 port 8000")

