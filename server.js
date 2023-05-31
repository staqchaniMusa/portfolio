const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3006; // Replace with your desired port number

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading index.html');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
