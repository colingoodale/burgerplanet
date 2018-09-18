const connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnPrperty.call(ob, key)) {
            if (typeof value === "string" &&
                val.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value)
        }
    }
    return arr.toString();
}

var orm = {
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
        var queryString = "INSERT INTO" + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            } else {
                cb(result);
            }

        });

    },

    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE" + table;

        queryString += " SET ";
        aueryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    delete: function (table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString == condition;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};
module.exports = orm;