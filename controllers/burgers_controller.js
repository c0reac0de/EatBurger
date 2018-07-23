//var express=require("express");
var express= require("express");

var router=express.Router();
//import ("/burger.js");
var burger=require("../models/burger.js");
//create routing based on assigment
//view all in database
router.get("/", function(req, res){
    burger.all(function(data){
        var hbsOjbect = {
            burger: data
        };
        console.log(hbsOjbect);
        res.render("index", hbsOjbect);
    });
});


//create a new burger
router.post("/api/burger", function(req,res){
    burger.create(["burger", "devoured"],[req.body.burger, req.body.devoured], function(result){
        //send back id of new quote
        res.json({id: result.insertId});
    })
})

//update burger status

router.put("/api/burger/:id",function(req,res){
    var condition="id"+req.params.id;

    console.log('condition', condition);

    burger.update({
        devoured: req.body.devoured
    },
    condition,
    function(result){
        if (result.changedRows === 0){
            //if no rows were changed then the id must not exist
            return res.status(404).end();
        }
        res.status(200).end();
    }
);
});

//export router
module.exports=router;