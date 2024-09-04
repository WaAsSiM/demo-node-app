var express = require("express");
var app = express();

var routes = require("./routes/route.js");

app.set("view engine", "ejs");
var bodyParser = require("body-parser"); // Add this line

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.get("/", routes.home);

app.get("/contact", routes.contact);
app.post("/contact", routes.submitContact);

var port = process.env.PORT || 3000;

var server = app.listen(port, function (req, res) {
  console.log("Catch the action at http://localhost:" + port);
});
