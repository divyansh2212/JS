function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName
    this.dob = new Date(dob);

    // this.getdobYear = function(){
    //     return this.dob.getFullYear();
    // }
    
    // this.getdobYear = () =>
    //     this.dob.getFullYear();
}

Person.prototype.getdobYear = function () {
    return this.dob.getFullYear();
}

const person1 = new Person("Divyansh", 'Mittal', '12-22-2001')
const person2 = new Person("Shreyansh", 'Mittal', '02-14-2001')

console.log(person1);
console.log(person2);
console.log(person1.getdobYear());