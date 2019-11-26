import http from "http";

const httpServer = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Pesto Bootcamp!\n");
  res.end();
});

export { httpServer };
