# Period 1
## Vanilla JavaScript, es2015/15.., Node.js, Babel + Webpack and TypeScript

### Relevant projects:
- [Vanilla Javascript](https://github.com/cph-an178/FullStack-JavaScript/tree/master/Period1/JavaScriptExercises)
- [Promises](https://github.com/cph-an178/FullStack-JavaScript/tree/master/Period1/PromisesExercise)
- [Async/await](https://github.com/cph-an178/FullStack-JavaScript/tree/master/Period1/Async_functions)
- [es2015](https://github.com/cph-an178/FullStack-JavaScript/tree/master/Period1/es2015_exercises)
- [Webpacks](https://github.com/cph-an178/FullStack-JavaScript/tree/master/Period1/webpackExercise)
- [TypeScript](https://github.com/cph-an178/FullStack-JavaScript/tree/master/Period1/typescript_exercise)

---

## Explain and Reflect:
>Explain differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.

Java er et klasse baseret, objekt-orienteret compile sprog der kører på mange platforme, fra stationære computere til mobiltelefoner. JavaScript er et prototype baseret scripting sprog der primært kører i browsere. Selvom deres navn lyder ens er deres design og kapacitet meget forskellige

Hvis du vil lære programmering til at lave websites, så vil JavaScript være meget nyttigt. Det bruges til script-sider på klienten i browseren og for at tilføje interaktivitet og dynamisk indhold til websites. Men det begynder også at blive brugt mere til server-side programmering (fx Node.js).

Java er et mere fuldt udstyret sprog, der kan bruges til alt fra back-end servere til desktop applikationer.

>Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers.

Es2015 (ES6) og ES7 introducerer ikke rigtig andet end forbedringer til JavaScript sproget og nogle få nye features. Det er ikke en alternativ syntax eller sprog ligesom TypeScript. Det er bare helt normalt JavaScript. For at bruge skal du bare installere Babel der konveterer koden.

Både TypeScript og Babel er "transpilers". De tager ES6 og konvertere det til ES5, som er et brederer accepterert 

TypeScript er et “superset” af JavaScript som giver JavaScript et typestærkt alternativ, klasser og interfaces. En af de største fordele er at enable IDE’er for at tilføje et bedre miljø for at opdage almindelige fejl i koden, gøre coden nemmere at læse og forhindre fejl ved runtime.

>Explain generally about node.js, and when it “makes sense” and npm, and how it “fits” into the node echo system.

Node.js er et “open source”, cross-platform runtime miljø til at udvikle server-side og netværks applikationer. Node.js applikationer er skrevet i Javascript og kan køres inde i Node.js runtime på OS X, Microsoft Windows og Linux. Det giver også et stort bibliotek af forskellige JavaScript moduler som gør det simpelt i udviklingen af web applikationer hvor der bruges Node.js.
 
>Explain about the Event Loop in Node.js

Event-loopet er hvad der gør at Node.js kan udøre “non-blocking Input/Output” operationer selvom javascript kun kører på en tråd. Det gør det hved at offloade operationer til systemets kerne når det er muligt.

[![What the heck is the event loop anyway?](http://img.youtube.com/vi/8aGhZQkoFbQ/0.jpg)](http://www.youtube.com/watch?v=8aGhZQkoFbQ)

>Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises

Babel er en “transpiler” for JavaScript som er mest kendt for at lave ES6 til kode som kan køre i din browser. 

Webpack er en god tilføjelse til en frontend udviklers værktøjssæt. Det er en modulpakker, der passer til de største enkeltwebs applikationer, og kan behandle JavaScript, CSS og meget mere.

>Explain the purpose of “use strict” and also Linters, exemplified with ESLint

Lint er det dev-tool der originalt var lavet til C-sprog. Lint hjælper programmeringen ved at markere mistænkelige og ikke-bærbare konstruktioner (sandsynligvis vil disse vlre fejl). Udtrykket anvendes nu generisk til værktøjer, der markerer mistænkelig brug i software, der er skrevet på et hvilket som helst computersprog. ESlint er en open-source javascript linting utility.

---

## Features in Javascript

### Hoisting:
JavaScript interpreter allows you to use the function before the point at which it was declared in the source code. 

However, function definition hoisting only occurs for function declarations, not function expressions. fx.
`const func = () => { return "World"};`
```javascript
// Will return undefined
console.log(variable);
// Will return "World"
console.log(func());

// Variables must be declared before they're used.
let variable = "Hello";
// Function can be declared after they're used
function func() {
    return "World";
};
```



### *this*:
A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.

In most cases, the value of this is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called.

In Java we use *this* in constructors 
```javascript
// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {a: 'Custom'};

// This property is set on the global object
var a = 'Global';

function whatsThis() {
  return this.a;  // The value of this is dependent on how the function is called
}

whatsThis();          // 'Global'
whatsThis.call(obj);  // 'Custom'
whatsThis.apply(obj); // 'Custom'
```

### Function closures and js Module Pattern:
The variable `add` is assigned the return value of a self-invoking function.

The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

This is called a JavaScript **closure**. It makes it possible for a function to have "**private**" variables.

The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
```javascript
var add = (function () {
    var counter = 0;
    return function () {counter += 1; return counter}
})();

add();
add();
add();
// the counter is now 3 
```

### Immediately-Invoked Function Expressions (IIFE):
IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
```javascript
function sayHi() {
    alert("Hello, World!");
}
sayHi(); // shows "Hello, World!" as alert in browser.
```


### JavaScripts Prototype
All JavaScript objects inherit properties and methods from a prototype.
Date objects inherit from Date.prototype. Array objects inherit from Array.prototype. Person objects inherit from Person.prototype.
The Object.prototype is on the top of the prototype inheritance chain:
Date objects, Array objects, and Person objects inherit from Object.prototype.


### User defined Callback Functions
That will call `doSomething`, which will call `foo`, which will alert "stuff goes here".

Note that it's very important to pass the function reference (`foo`), rather than calling the function and passing its result (`foo()`). In your question, you do it properly, but it's just worth pointing out because it's a common error.
```javascript
function doSomething(callback) {
    // ...

    // Call the callback
    callback('stuff', 'goes', 'here');
}

function foo(a, b, c) {
    // I'm the callback
    alert(a + " " + b + " " + c);
}

doSomething(foo);
```

### *Map*, *filter* and *reduce*

**Map:**

The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.
```javascript
const numbers = [2, 4, 8, 10];
const halves = numbers.map(x => x / 2);

// halves is [1, 2, 4, 5]
```

**Filter:**

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.
```javascript
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const longWords = words.filter(word => word.length > 6);

// longWords is ["exuberant", "destruction", "present"]
```

**Reduce:**

The `reduce()` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
```javascript
const total = [0, 1, 2, 3].reduce((sum, value) => sum + value, 1);

// total is 7
```
## User defined resusable modules implemented in Node.js
When you create functions that you want to use in other places you can export them as modules.
```javascript
module.exports = {
    getAllUsers: getAllUsers,
    addUser: addUser,
}
```

---
## Callbacks, Promises and async/await

**Serial** and **parallel**:

Here you can clearly see that in the `serial` function, the second `sleep()` is only called after the first `sleep()` has completed, while in `parallel` it's called immediately, before the first has completed, and then it waits for both to complete. So while they may look functionally identical, they are subtly different.
```javascript
async function serial() {
  var a = sleep(); //
  await a;         // await sleep();

  var b = sleep(); //
  await b;         // await sleep();
}

async function parallel() {
  var a = sleep();
  var b = sleep();
  await a;
  await b;
}
```

**Promise-solutions**:

See PromisesExercise ex1.js

**Async/await**:

See Async_functions exercises

**Error handling with promises**:
```javascript
Promise.race(promise)
    .then(reslove => {
        // Do something here
    }).catch(reject => {
        // This is where you handle errors in promises
    })
```
