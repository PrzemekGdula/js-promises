const promise = fetch('https://randomuser.me/api') // fetch obiecuje ze dostarczy dane

promise
    .then(response => {
        response.json()
            .then(data => {
                console.log(data)
            })
    })