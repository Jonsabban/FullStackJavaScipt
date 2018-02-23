"use strict";
function personLogger(person) {
    var str = "\n    ***********************************\n    ID:     " + person.id + "\n    Name:   " + person.firstName + " " + person.lastName + "\n    Phone:  " + person.landLine + "\n    Email:  " + person.email + "\n    ***********************************\n    ";
    console.log(str);
}
var p1 = { id: 1, firstName: "SUPER", lastName: "HOT", email: "totalreal@email.comma" };
personLogger(p1);
//# sourceMappingURL=c:/Users/Sanox/Documents/4-Semester/JavaScript/typeScript/ClassDemo/build/interfaceDemo.js.map