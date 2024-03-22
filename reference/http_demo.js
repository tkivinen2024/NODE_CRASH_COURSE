// ------------------------------------------------------
// --- 22.3.0224 Timo Kivinen
// ---
// --- Run:     node http_demo
// --- Video:   56:20
// ------------------------------------------------------

const http = require('http');

// Create server object
http.createServer((req, res) => {
    // Write response
    res.write('Hello World');
    res.end();
    })
    .listen(5000, () => console.log('Server running...'));

