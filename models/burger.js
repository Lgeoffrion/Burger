// Import ORM
var orm = require("../config/orm");



//CREATE THE CODE THAT WILL CALL THE ORM FUNCTIONS USING BURGER SPECIFIC INPUT FOR THE ORM
var burger = {
    selectAll: function(callback) {
      orm.selectAll("burgers", function(res) {
        callback(res);
      });
    },

    insertOne: function(val, callback) {
      orm.insertOne("burgers", "name", val, function(res) {
        callback(res);
      });
    },

    updatedOne: function(burgerID, cb) {
        orm.updatedOne("burgers", burgerID, function(res) {
          console.log(res);
          cb(res);
        });
    },

    deleteOne: function(conditionVal, callback){
        orm.deleteOne("burgers", conditionVal, function(res){
            callback(res);
        });
    },
  };




// Export the model for use in the controllers
module.exports = burger;