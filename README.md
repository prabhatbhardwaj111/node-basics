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

# Create express server

```bash
mkdir create-express-server
cd create-express-server
touch index.js
npm init
npm install express --save
```
Open index.js file and add the below code

```js
#index.js

const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(port, () => {
    console.log('Server is running at port ' + port);
})
```
```bash
node index.js


Server is running at port 3000
```

