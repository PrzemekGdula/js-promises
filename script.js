class Person {
    constructor(name){
      this.name = name
    }
  
    changeName(newName) {
      this.name = newName

      return this//musimy zwrocic obiekt aby moc wykonywac kolejne metody
    }
  }
  
  const person1 = new Person('Mateusz')