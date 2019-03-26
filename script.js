const writeInBody = message => document.body.innerText = message

writeInBody('Laduje...')

fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(data => writeInBody(

        data.results[0].name.first +
        ' ' +
        data.results[0].name.last
    ))
    .catch(error => writeInBody('Wystapil blad!'))

