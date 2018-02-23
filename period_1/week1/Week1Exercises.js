//1)
//FILTER
const names = ['Tom', 'Bo', 'George'];

function checkNames(name) {
    if (name.length <= 3)
        return name;
}
const namesFilter = names.filter(checkNames);
console.log("Filter: " + namesFilter);

//MAP
function toUppercase(name) {
    return name.toUpperCase();
}

const uppercase = names.map(toUppercase);
console.log("Map: " + uppercase);

//2)
//Filter
function myFilter(array, callback) {
    let arr = [];
    array.forEach(element => {
        if (callback(element)) {
            arr.push(callback(element));
        }
    });
    return arr;
}
const myFilterNames = myFilter(names, checkNames);
console.log("MyFilter: " + myFilterNames);
//Map
function myMap(array, callback) {
    let arr = [];
    array.forEach(element => {
        arr.push(callback(element));
    });
    return arr;
}
const myMapNames = myMap(names, toUppercase);
console.log("MyMap: " + myMapNames);

//3)
//Proto Filter
Array.prototype.myFilter = function (callback) {
    let arr = [];
    this.forEach(element => {
        if (callback(element)) {
            arr.push(callback(element));
        }
    });
    return arr;
}
const protoFilter = names.myFilter(checkNames)
console.log("Prototype Filter: " + protoFilter);
//Proto Map
Array.prototype.myMap = function (callback) {
    let arr = [];
    this.forEach(element => {
        arr.push(callback(element));
    });
    return arr;
}
const protoMap = names.myMap(toUppercase);
console.log("Prototype Map: " + protoMap)

//4)
//a
const namesList = "<ul>" + names.map(function (name) {
    return "<li>" + name;
}).join("</li>") + "</li> <ul>";

console.log("4.a): " + namesList)
//b
const namesAndPhones = [{ name: "Lars", phone: "1234567" }, { name: "Peter", phone: "675843" }, { name: "Jan", phone: "98547" }, { name: "Bo", phone: "79345" }];

const table = (
    "<Table striped bordered>" +
    "<thead><tr><th>Name</th><th>Phone</th></thead>" +
    "<tbody> <tr>" +
    namesAndPhones.map(function (obj) {
        return "<td>" + obj.name;
    }).join("</td>") +
    namesAndPhones.map(function (obj) {
        return "<td>" + obj.phone;
    }).join("</td>") +
    "</tr> </tbody> </Table>"
)

console.log(table)


//REDUCE
//a)
console.log("Reduce a: #" + names.join(", #"));

const numbers = [2, 3, 67, 33];
//b)
console.log("--- Reduce ---");
console.log("Array: " + numbers);

function getSum(total, num) {
    return total + num;
}
console.log("Reduce b: " + numbers.reduce(getSum));
//c)
const members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 },
];

var res = members.reduce((accu, curval, i, arr) => {
    if (i < arr.length - 1) {
        return accu + curval.age;
    }
    return (accu + curval.age) / arr.length;
},0)
console.log(res);


function getAverageAge(array) {
    let accumulator = 0;
    let count = 0
    array.forEach(member => {
        accumulator += member.age;
        count++;
    });
    return accumulator / count;
};

console.log(getAverageAge(members));
