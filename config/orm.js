const connection = require("../config/connection.js");


const orm = {
    selectAll: function (tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },

    insertOne: function (tables, cols, vals, cb) {

    },

    updateOne: function () {

    }
};
module.exports = orm;