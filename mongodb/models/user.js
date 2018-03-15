const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstName: String,
    lastName: { type: String, minlength: 3 },
    password: { type: String, required: true },
    created:  { type: Date, default: Date.now },
    modified: Date
});

UserSchema.virtual("fullInfo").get(function(){ return this.firstName + "," + this.lastName});
UserSchema.pre("save", function () {
    this.modified = new Date();
})
UserSchema.pre("save", function () {
    this.password = `***** ${this.password} *****`;
})

let User = mongoose.model("user", UserSchema);
module.exports = User;