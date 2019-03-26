class NumbersContainer {
    constructor() {
        this.numbers = []
    }
    addNumber(number) {
        this.numbers = this.numbers.concat(number)
        return this

    }
}

const container1 = new NumbersContainer()

container1.addNumber(4) // { numbers: [4] }
container1.addNumber(6) // { numbers: [4, 6] }

container1
    .addNumber(6)
    .addNumber(9)
    .addNumber(11) // { numbers: [4, 7, 6, 9, 11] }

console.log(container1)