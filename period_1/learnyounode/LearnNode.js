var fs = require('fs');

const file = process.argv[2];
console.log("--- SYNC ---");
console.log("Before");
const content = fs.readFileSync(file);
const data = content.toString();
console.log("Number of lines: " + data.split('\n').length);
console.log("After");

console.log("--- ASYNC ---");

console.log("Before");
fs.readFile(file, (err, data) => {
    if (err) {
        throw err;
    }
    console.log("Number of lines: " + data.toString().split('\n').length);

})
console.log("After");