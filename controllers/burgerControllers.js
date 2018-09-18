var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {

    //not passing as array, object is not acting properly
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "0"
    ], [
            req.body.name, req.body.null
        ], function (result) {
            res.json({ id: result.insertId });
        });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition ", condition);

    cat.updateOne({
        devoured: req.body.sleepy
    },
        condition, function (result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

router.delete("api/cats/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    car.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;

