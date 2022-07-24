function getUsers(callbackFn) {
  setTimeout(() => {
    callbackFn([
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ]);
  }, 1000);
}

function findUserWithCallback(username, callback) {
  getUsers((users) => {
    const user = users.find((user) => user.username === username); 
    callback(user);
  });
}

findUserWithCallback('john', function (data) {
  console.log(data)
});

// result will be { username: 'john', email: 'john@test.com' }




