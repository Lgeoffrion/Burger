var express = require("express");
var router = express.Router();

//Import the burger.js model
var burger = require("../models/burger");


//CREATE THE "ROUTER"

//route to index
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//Submit a New Burger
router.post("/create", function (req, res) {
    burger.insertOne(req.body.name, function (result) {
            // Send back the ID of the new burger
            res.redirect('/');
        });
});


//Devour Burger (Modify its state)

router.put('/:id', function(req, res) {
    burgers.updateOne(req.params.id, req.body.devoured, function(result) {
    console.log(result);
    res.redirect("/");
    });
  });

//Delete from Devour List
router.delete('/delete/:id', function (req, res) {
    burger.deleteOne(req.params.id, function () {
        res.redirect('/');
    });
});
// Export the router
module.exports = router;
