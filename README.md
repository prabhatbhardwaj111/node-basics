# node-basics

### Create a simple node server

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

### Create express server

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

### Callbacks Function
Callback function pass in to a outer function as a parameters to perform an action inside the outer function.

Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed. It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors

```js
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```

### Anonymous Function?


Alternatively, we can define a function directly inside another function, instead of calling it. It will look like this:

```js
setTimeout(function() {  
    console.log("This message is shown after 3 seconds");
}, 3000);
```
As we can see, the callback function here has no name and a function definition without a name in JavaScript is called as an “anonymous function”. 


