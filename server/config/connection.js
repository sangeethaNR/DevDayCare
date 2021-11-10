const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/daycaredb', 
  err => {
    if(err) throw err;
    console.log('connected to MongoDB')
});

module.exports = mongoose.connection;
