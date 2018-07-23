//connect node to mysql
var mysql=require("mysql");

//connections....connect.

var connection=mysql.createConnection({
  port:3306,
  host:"localhost",
  user:"root",
  password:"password",
  database:"burgers_db"  
});
//make connection

connection.connect(function(err){
    if(err){
        console.error("error connecting, oops!");
        return;
    }
    console.log("connected as id:"+connnection.threadId);
});

//module.exports()
module.exports=connection;


