const mongoose = require("mongoose");
const dbURI = 'mongodb://Jonas:554888@ds113849.mlab.com:13849/saynotosql';

mongoose.connect(dbURI);

mongoose.connection.on("connected",() => console.log("connected"));
mongoose.connection.on("error",() => console.log("Something went wrong"));