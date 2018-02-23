"use strict";
function sayHello(firstName, lastName, role) {
    var temp = "Hello " + firstName + " " + lastName + "! ";
    temp += (role) ? "How did you manage to become a " + role + "? " : "";
    console.log(temp);
}
var cPerson = (function () {
    function cPerson(fName, lName) {
        this.fName = fName;
        this.lName = lName;
        this.fName = fName;
        this.lName = lName;
    }
    cPerson.prototype.sayHelloEventually = function () {
        var self = this;
        setTimeout(function () {
            console.log("Hi " + self.fName);
        });
    };
    cPerson.prototype.sayHelloV2 = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Hi " + _this.fName);
        });
    };
    return cPerson;
}());
var p = new cPerson("Ficko", "Fickovic");
p.sayHelloEventually();
p.sayHelloV2();
//# sourceMappingURL=c:/Users/Sanox/Documents/4-Semester/JavaScript/typeScript/ClassDemo/build/funcDemo.js.map