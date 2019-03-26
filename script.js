fetch('https://randomuser.meeeeee/api')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error', error))

//nauczyc sie na pamiec