import http from "http";

http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
  })
  .listen();
