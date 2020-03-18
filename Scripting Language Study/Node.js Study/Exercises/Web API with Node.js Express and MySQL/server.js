var express = require('express');  
var mysql = require('mysql');  
var bodyParser=require('body-parser');  

var urlencoderParser = bodyParser.urlencoded({extended:false});  

var app=express();  
var port = process.env.port||3100;  

//Api code here  

//Mysql Connection  
var con = mysql.createConnection({  
    host     : 'remotemysql.com',
    user     : 'DGK7kSYeeW',
    password : 'CkalaMnFw2',
    database : 'DGK7kSYeeW'
});  

//GET  
app.get('/api',function(req,res){  
    var qry = "select * from employee";  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log(rows);  
        res.json(rows);  
    });  
});  

//GET with id  
app.get('/api/:id',function(req,res){  
    var qry = "select * from employee where id="+req.params.id;  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log(rows[0]);  
        res.json(rows[0]);  
    });  
});  

//POST  
app.post('/api',urlencoderParser,function(req,res){  
    var qry = "insert into employee values("+parseInt(req.body.id)+",'"+req.body.name+"','"+req.body.gender+"','"+req.body.city+"',"+parseInt(req.body.salary)+")";  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log("1 Row Added.");  
        res.send("1 Row Added.")  
    });  
});  

//PUT  
app.put('/api/:id',urlencoderParser,function(req,res){  
    var qry = "update employee set name='"+req.body.name+"',gender='"+req.body.gender+"',city='"+req.body.city+"',salary="+parseInt(req.body.salary)+" where id="+parseInt(req.params.id);  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log("1 Row Updated.");  
        res.send("1 Row Updated.")  
    });  
});  

//DELETE  
app.delete('/api/:id',function(req,res){  
    var qry = "delete from employee where id="+parseInt(req.params.id);  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log("1 Row Removed.");  
        res.send("1 Row Removed.")  
    });  
});  

app.listen(port);  
console.log('Server is started on http://localhost:'+port);  