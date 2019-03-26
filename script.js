const writeInBody = message => document.body.innerText = message

writeInBody('Laduje...')

fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(data => {
        console.log(data.results[0].name)
        document.body.innerText = (
            data.results[0].name.first +
            ' ' +
            data.results[0].name.last
        )
    })
    .catch(error => writeInBody('Wystapil blad!'))

