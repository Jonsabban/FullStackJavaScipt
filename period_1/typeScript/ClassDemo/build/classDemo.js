"use strict";
var Person = (function () {
    function Person(name, email) {
        this.email = email;
        this.id = Person.nextId++;
        this.name = name;
    }
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    Person.nextId = 1000;
    return Person;
}());
var person1 = new Person("Ficko", "Ficko@Fake.email");
var person2 = new Person("Ficko", "Ficko@Fake.email");
var person3 = new Person("Ficko", "Ficko@Fake.email");
console.log(person1);
console.log(person3.getId);
//# sourceMappingURL=d:/Programming/JavaScript/FullStackJavaScript/period_1/typeScript/ClassDemo/build/classDemo.js.map