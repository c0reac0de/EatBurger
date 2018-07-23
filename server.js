//require modules express body parser
var express=require("express");
var bp=require("body-parser");

var PORT=process.env.PORT || 3306;

var app= express();

//serve static for app from public
app.use(express.static("public"));

//parse application
app.use(bp.urlencoded({ extended: true }));

//parse application/json
app.use(bp.json());

//require handlebars
var exphbs= require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//import routes and give the server access to them
var routes =require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function(err, PORT){
    if(err) {
        throw ("not connected!");
    }else{console.log("app listening at localhost:" + PORT);
}
});