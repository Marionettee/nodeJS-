const express = require('express');
const mongoose = require('mongoose');
//假设有一个mongodb的数据库
const DB_URL = 'mongodb://localhost:11111'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})

const User = mongoose.model('user', new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))
// 新增数据
User.create({
    user:'Conan',
    age:24
}),function(err,doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
}
// mongoose文档类型，String，Number等数据结构，create，remove，update，find增删改查
const app = express();

app.get('/',function(req,res){
    res.send('hello world')
})

app.get('/test',function(req,res){
    User.find({},function(err,doc){
        res.json(doc)
    })
})

app.listen('8080',function(){
    console.log('node start at port 8080')
})