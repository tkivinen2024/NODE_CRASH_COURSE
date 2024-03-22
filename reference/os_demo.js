// ------------------------------------------------------
// --- 22.3.0224 Timo Kivinen
// ---
// --- Run: node os_demo
// --- Video:
// ------------------------------------------------------
const os = require('os');

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());

