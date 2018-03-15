const crypto = require('crypto')
function makeSecureRandom(size) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(size, function (err, buffer) {
            if (err) {
                reject(err);
            }
            else {
                resolve(buffer.toString('hex'))
            };
        });
    })
}

Promise.all([makeSecureRandom(48), makeSecureRandom(40),
makeSecureRandom(32), makeSecureRandom(24),
makeSecureRandom(16), makeSecureRandom(8)])
    .then(function (resolve) {
        console.log(resolve)
    })
    .catch(function (reject) {
        console.log(reject)
    })