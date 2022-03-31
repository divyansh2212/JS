class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }

    getdobYear() {
        return this.dob.getFullYear();
    }
}

const person1 = new Person('Divyansh', 'Mittal', '12-22-2002')

console.log(person1.getdobYear());
console.log(person1);