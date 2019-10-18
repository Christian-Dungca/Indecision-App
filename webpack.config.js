const path = require('path');

// entry -> output
// contains path to current location -> path.join(__dirname, 'public')
// defining config for webpack build

module.exports = {  
    entry : './src/app.js',
    output : {
        path : path.join(__dirname, 'public'),
        filename : 'bundle.js'
    } 
};