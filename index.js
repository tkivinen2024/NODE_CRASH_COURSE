// -----------------------------------------------------------------
// --- 22.3.2024  Timo Kivinen
// ---
// ---
// ---
// --- Video: 22:44 (https://www.youtube.com/watch?v=fBNz5xF-Kx4)
// --- Video: 52:29 (https://www.youtube.com/watch?v=fBNz5xF-Kx4)
// --- Video: 55:00 (https://www.youtube.com/watch?v=fBNz5xF-Kx4)
// --- Video: 1:03:00 (https://www.youtube.com/watch?v=fBNz5xF-Kx4)
// --- Video: 1:10:44 (https://www.youtube.com/watch?v=fBNz5xF-Kx4)
// --- Video: 1:22:45 (https://www.youtube.com/watch?v=fBNz5xF-Kx4)
// ---      npm run dev
// -----------------------------------------------------------------

// 1 console.log('Hello From Node.js...');
//const person = require('./person');

//const Person = require('./person');
//const person1 = new Person('John Doe', 30);
//console.log(person.name);
//person1.greeting();

/*
const Logger = require('./logger');
const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World!');
logger.log('Hi!');
logger.log('Hello!');
*/

const http = require('http');
const path = require('path');
const fs   = require('fs');

/*
const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url === '/') {
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'), 
            (err, content) => {
                if (err) throw err;
                //res.end('<h1>Home</H1>')
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(content);
                //res.end(path.join(__dirname, 'public', 'index.html'))
            }
        );
    }

    // console.log(req.url);
    if (req.url === '/about') {
        fs.readFile(
            path.join(__dirname, 'public', 'about.html'), 
            (err, content) => {
                if (err) throw err;
                //res.end('<h1>Home</H1>')
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(content);
            }
        );
    }

    if (req.url === '/api/users') {
        const users = [
            {name: 'Bob Smith', age:40},
            {name: 'John Doe', age:30}
        ];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));

    }


});

*/
// ----------------------------------------------------------
// --- Video 1:13:00
// ----------------------------------------------------------
const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // Extension of a file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check ext and set content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read file

    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                }
                )
            }
            else {
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }
        else {
            // Success
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf8');

        }
    });
    //console.log(filePath);
    //res.end();
    
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));




