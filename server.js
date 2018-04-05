const http    = require('http');
const port    = 3000;

const requestHandler = (request, response) => {

  console.log(request.method);
  response.writeHead(200,{
    'Content-Type' : 'text/html'
  });
  response.write('<!doctype html><html lang="en"><body>HELLO</body></html>')
  response.end();
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log("Error...", err)
  }
  console.log("Server listening on "+port);
})
