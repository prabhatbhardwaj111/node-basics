
function getUsersWithPromise() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve([
                [
                    { username: 'john', email: 'john@test.com' },
                    { username: 'jane', email: 'jane@test.com' },
                ]
            ]);
        }, 1000)

    })

}
let usersList = getUsersWithPromise();
usersList.then((users) => console.log(users));

