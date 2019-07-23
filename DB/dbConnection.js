// Configuring the database
const dbConfig = require('./config/db.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var connectWithRetry = () => {
    return mongoose.connect(dbConfig.url, {useNewUrlParser: true}, function(err) {
        if (err) {
            console.error('Failed to connect to mongo on startup - retrying in 1 sec', err);
            setTimeout(connectWithRetry, 1000);
        }
    });
};
connectWithRetry();

// // Connecting to the database
// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Successfully connected to the database");    
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...', err);
//     process.exit();
// });