let http = require("http");


//3)
//a)
interface iBook {
    title: string;
    readonly author: string;
    published?: Date;
    pages?: number;
}
//b)
function printBook(book: iBook): iBook {
    return book;
}
const book1 = { title: "How to be as cool as me", author: "Ficko", published: new Date(), pages: 200 };
console.log(printBook(book1));

//c)
/*
The order of the properties does NOT matter.
We just need the required properties to be present and to be the right type.
If something is missing, has the wrong type, or is named differently, the compiler will warn us.
https://en.wikipedia.org/wiki/Duck_typing
*/

//d)
const book2 = { title: "How to be as cool as me", author: "Ficko" };
console.log(printBook(book2));

//e)
let book3: iBook = { title: "How to be as cool as me", author: "Ficko" };
book3.author = "Toby"; //throws error

//f)
class javaBook implements iBook {
    title = "How to be as cool as me";
    readonly author = "Ficko";
    published = new Date();
    pages = 200;
}
let book4 = new javaBook();
console.log(printBook(book4));

//4)
//a,b,c)
interface iFunction {
    (str1: string, str2: string, str3: string): Array<string>
}
let myFunction: iFunction;
myFunction = function (str1: string, str2: string, str3: string) {
    let arr = [str1, str2, str3];
    return arr;
}
let myFunctionUpperCase: iFunction;
myFunctionUpperCase = function (str1: string, str2: string, str3: string) {
    let arr = [str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase()];
    return arr;
}
console.log(myFunction("who","goes","there?"));
console.log(myFunctionUpperCase("who","goes","there?"));

//d)
let f2 = function logger(f1: iFunction){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}