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


});




const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));




