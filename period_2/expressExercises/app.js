var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//add your content here
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/calculator/:operation/:n1/:n2", function (req, res, next) {
    var calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)
    }
    next();
})

app.get("/api/calculator/*", function (req, res) {
   res.send(this.calculatorRequest)
   console.log(this.calculatorRequest);
})

app.listen(3000, function () {
    console.log("Server started, listening on: " + 3000);
})
