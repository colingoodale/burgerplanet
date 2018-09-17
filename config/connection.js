const mysql = require("mysql");

const connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burger_db"
    });
};

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadID);
});

module.exports = connection;