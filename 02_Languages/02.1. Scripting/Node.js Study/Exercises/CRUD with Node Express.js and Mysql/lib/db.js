 var mysql=require('mysql');
 var connection=mysql.createConnection({
    host     : 'remotemysql.com',
    user     : 'DGK7kSYeeW',
    password : 'CkalaMnFw2',
    database : 'DGK7kSYeeW'
 });
connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!:)');
   }
 });  
module.exports = connection; 