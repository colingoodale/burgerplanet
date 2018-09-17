const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ desfaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgerControllers.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("Server listening, port: " + PORT);
})