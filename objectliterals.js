const person = {
    firstname: 'Divyansh', lastname: 'Mittal', age: '20', hobbies: ['coding', 'reading'],
    address: {
        colony: "Deep Vihar", city: 'Delhi'
    }
}

console.log(person.hobbies);
console.log(person.address, person.firstname);
console.log(person.address.city);

const { firstname, lastname } = person;
console.log(firstname);

const { address: { city, colony } } = person
console.log(colony);

person.email = 'abc@gmail.com'
console.log(person);