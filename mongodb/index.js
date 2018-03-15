require("./db");
const mongoose = require("mongoose");
const User = require("./models/user");


let user1 = new User({
    firstName: "Ficko",
    lastName: "Fickovic",
    password: "superSecret"
});
/* user1.save((err, data) => {
    if (err) {
        console.log("something went wrong" + err.message)
    }
    else {
        console.log(data.fullInfo + "," + data.password);
    }
}); */
user1.save()
    .then(data => console.log(data.fullInfo))
    .catch(err => consoFle.log(err));

User.findOne({ firstname: "Ficko" })
    .then(data => console.log(data))
    .catch(err => console.log(err));