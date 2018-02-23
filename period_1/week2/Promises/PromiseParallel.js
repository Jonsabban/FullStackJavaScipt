let promiseFactory = function (msg, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { //To demonstrate an async call
            var ok = true;  // simulates the result of the operation
            var err = "you were stupid enough to put an 'a'. ";
            if (msg = "a") {
                ok = false;
            }
            if (ok) {
                resolve(msg.toUpperCase());
            }
            else {
                reject(err);
            }
        }, delay);
    });
};
let p1 = promiseFactory("Can", 1000);
let p2 = promiseFactory("a", 4000);
let p3 = promiseFactory("Hear", 3000);
let p4 = promiseFactory("Me?", 2000);

Promise.all([p1,p2,p3,p4]).then(data=>{
    console.log(data.join("\n"));
})
.catch(err=>console.log("Error: " + err));
