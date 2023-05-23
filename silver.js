const fs = require('fs');
const http = require('http');
http.createServer(function(req, res) {
    fs.readFile('C:\\Users\\DELL\\eg_flag.jpg', function(err, data) {
      if (err) {
        res.writeHead(404);
        res.end("File not found.");
        return;
      }
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(data);
    });
  }).listen(8080);