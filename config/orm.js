// Import MySQL connection.
var connection = require("./connection");


//CREATE METHODS NEED TO RETRIEVE AND STORE DATA TO THE DATABASE
var orm ={
    selectAll: function (table, callback){
        var queryString = "SELECT * FROM " + table;
        connection.query(queryString, function(err,data){
            if (err) throw err;
            callback(data);
        });
    },
    insertOne: function (table, column, burgerInput, callback){
        var queryString = "INSERT INTO " + table + " (" + column + ") VALUES (?)";
        connection.query(queryString, [burgerInput], function(err,data){
            if (err) throw err;
            callback(data);
        });
    },
    updatedOne: function (table,  burgerID,  callback){
        var queryString = "UPDATE " + table + " SET devoured = True  WHERE id=" + burgerID;
        connection.query(queryString, function(err,data){
            if (err) throw err;
            callback(data);
        });
    },
    deleteOne: function (table, conditionVal, callback){
        var queryString = "DELETE FROM " + table + " WHERE id = ?";
        connection.query(queryString, [conditionVal], function (err,data){
            if (err) throw err;
            callback(data);
        }) ;
    }
};

// Export the orm object for the model (burger.js).
module.exports = orm;