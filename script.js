fetch('https://randomuser.me/api') // fetch obiecuje ze dostarczy dane

    .then(response => {
        // console.log(response)
        response.json()
            .then(data => {
                // console.log(data)
            })
            // console.log('inside first then after second then')

            return 'Ala ma kota'
    })
    .then((valueFromPromiseFromThen)=> {
        console.log(valueFromPromiseFromThen)
    }) 