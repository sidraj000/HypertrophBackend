var express = require("express");
var router = express.Router();
const mysql = require('mysql');
var mysqlConnection = require('../connect');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'siddhuraj000@',
    database: 'nodemysql'
  });


router.get('/createUserTable', (req, res) => {
    let sql = "CREATE TABLE users(user_id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(256), email TEXT)"
    mysqlConnection.query(sql, (err, result) => {
      if(err) {
        console.log(err);
        res.status(500).send({ error: 'Error in creating table in sql' })
      }
      console.log(result);
      res.send(result);
    })
 });


router.post('/insertuser', (req, res) => {
    var name  = req.query.name;
    var email  = req.query.email;
  
      var value    = [[name, email]];
      let sql = "INSERT INTO users (name, email)  VALUES ?"
      mysqlConnection.query(sql, [value] , (err, result) => {
         if(err) {
             console.log(name);
             res.status(500).send({ error: 'Error in inserting data into table' })
         }
        console.log(email);
        res.send(result);
      })
   });
   router.get('/print',(req,res)=>{
       res.send(req.query.data);
       console.log(req.query.data);
   })
   module.exports = router;