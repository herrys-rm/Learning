const os = require("os")

console.info(os.platform());
console.table(os.cpus());

// error karena tidak menggunakan mjs