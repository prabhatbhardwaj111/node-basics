# node-basics

# Create a simple node server

```bash
mkdir server
npm init
touch index.js
```
Add the below code in index.js file
```js
var http = require('http');

http.createServer((req, res)=>{
    res.write('Hello..........................');
    res.end();
}).listen(8000);
console.log('Node.js web server at port 8000 is running..');

```
