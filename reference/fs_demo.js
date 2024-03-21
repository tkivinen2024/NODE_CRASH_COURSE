// ------------------------------------------------------
// --- 21.3.0224 Timo Kivinen
// ---
// --- Run: node path_demo
// --- Video: 37:47
// ------------------------------------------------------


const fs = require('fs');
const path = require('path');

// Create folder
//fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
//    if(err) throw err;
//    console.log('folder created...');
//});

// Create folder
/*
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
    console.log('folder created...');
});
*/
// Create and write to a file
/*
fs.writeFile(
    path.join(__dirname, '/test', 'hello.txt'), 
    'Hello World!',
    err => {
        if (err) throw err;
        console.log('File written to ...');
    
    // File append
    fs.appendFile(
        path.join(__dirname, '/test', 'hello.txt'), 
        'I love Node.js',
        err => {
            if (err) throw err;
            console.log('File written to ...');
        }
    );
    }
);
*/

// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});


// Rename file
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'), 
    path.join(__dirname, '/test', 'helloworld.txt'),
    err => {
        if(err) throw err;
        console.log('file renamed...');
    }
);

