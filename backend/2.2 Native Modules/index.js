const fs = require ("fs")

// fs.writeFile("hello.txt", "Hello from nodeJs Bootcamp", (err) => {
//   if (err) throw err;
//   console.log("berhasil tersimpan");
// }); 

fs.readFile("./hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); 