//import orm.js into burger.js
var orm= require("../config/orm.js");
//call orm function using burger specific input for orm
var burger={
    all: function(cb){
        orm.all("burger", function(res){
            cb(res);
        });
    },

//variable columns and values are arrays
// create: function(cols, vals, cb) {
//     orm.create("burger", cols, vals, function(res) {
//         cb(res);
//     });
// },
// update: function(objColVals, condition, cb) {
//     orm.update("burger", objColValsm, condition, function(res){
//         cb(res);
//     });
// }
};
//module.export()burger.js
module.exports=burger;