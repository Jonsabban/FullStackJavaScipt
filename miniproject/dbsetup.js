var mongoose = require('mongoose');
const dbURI = "mongodb://jonas:sikkerkode@ds141232.mlab.com:41232/miniproject"
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
});

