"use strict";
var http = require("http");
function printBook(book) {
    return book;
}
var book1 = { title: "How to be as cool as me", author: "Ficko", published: new Date(), pages: 200 };
console.log(printBook(book1));
var book2 = { title: "How to be as cool as me", author: "Ficko" };
console.log(printBook(book2));
var book3 = { title: "How to be as cool as me", author: "Ficko" };
book3.author = "Toby";
var javaBook = (function () {
    function javaBook() {
        this.title = "How to be as cool as me";
        this.author = "Ficko";
        this.published = new Date();
        this.pages = 200;
    }
    return javaBook;
}());
var book4 = new javaBook();
console.log(printBook(book4));
var myFunction;
myFunction = function (str1, str2, str3) {
    var arr = [str1, str2, str3];
    return arr;
};
var myFunctionUpperCase;
myFunctionUpperCase = function (str1, str2, str3) {
    var arr = [str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase()];
    return arr;
};
console.log(myFunction("who", "goes", "there?"));
console.log(myFunctionUpperCase("who", "goes", "there?"));
var f2 = function logger(f1) {
    var _a = ["A", "B", "C"], a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
};
//# sourceMappingURL=d:/Programming/JavaScript/FullStackJavaScript/period_1/typeScript/ClassDemo/build/typeScriptExercises.js.map