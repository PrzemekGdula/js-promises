const promise = fetch('https://randomuser.me/api') // fetch obiecuje ze dostarczy dane


promise
.then((response) => console.log(response.json())) //response obiecuje, ze wykona funkcje, json obiecuje, ze prztworzy dane

//response.json() rowniez zwraca promise, ale ta promisa resolvuje sie do sparsownych danych, parsed JSON data