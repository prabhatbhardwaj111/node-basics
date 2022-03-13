var http = require('http');

http.createServer((req, res)=>{
    res.write('Hello..........................');
    res.end();
}).listen(8000);
console.log('Node.js web server at port 8000 is running..')



//create a server object:
/*http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
  }).listen(8080); //the server object listens on port 8080
  console.log('Node.js web server at port 8080 is running..')*/