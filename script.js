const promise = fetch('https://randomuser.me/api')

let response = null

promise
.then((promiseValue) => {response = promiseValue})

console.log(response) // we cant get promise value here