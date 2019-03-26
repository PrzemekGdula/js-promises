fetch('https://randomuser.meeeeee/api')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error', error))
    .finally(() => console.log('I will be here always!'))
//nauczyc sie na pamiec