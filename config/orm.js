//var connection=require("/connection.js");
var connection=require("../config/connections.js");
//create methods to execute
// necesssary mysql commands 
//in controllers
//selectALl()
//insertOne()
//updateOne()
var connection=require("/Users/user/GitHub/EatBurger/config/connections.js")
//?? for swapping out table or column values
//? for other values
//this helps avoid sql injection+security

var orm={
    selectAll: function(tableInput, colToSearch, valOfCol){
        var queryString="SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString,[tableInput, colToSearch, valOfCol], function(err, result){
            if(err) throw err;
            console.log(result);
        });
    },
  
};
//insertOne()
//updateOne()


//module.exports(orm) for burger.js model;
module.exports=orm;

