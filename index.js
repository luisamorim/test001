const http = require("http");
const port = process.env.PORT || 3000;
http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Server Nodejs!");
  })
  .listen(port, () => {
    console.log("Server is running...");
  });
