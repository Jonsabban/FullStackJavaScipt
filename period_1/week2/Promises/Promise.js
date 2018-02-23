let promiseFactory = function (msg, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { //To demonstrate an async call
            var ok = true;  // simulates the result of the operation
            if (ok) {
                resolve(msg.toUpperCase());
            }
            else {
                reject("UPPPPs");
            }
        }, delay);
    });
};
let p = promiseFactory("Msg from Promise", 1000);
let results = [];

p.then(data => {
    results.push(data);
    return promiseFactory("Hello World", 3000);
}).then(data => {
    results.push(data);
    return promiseFactory("Hello peeps", 2000);
}).then(data => {
    results.push(data);
    console.log(results.join("\n"));
})
    .catch(err => console.log("Error: " + err));