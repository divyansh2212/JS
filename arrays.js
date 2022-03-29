const numbers = new Array(1, 2, 3, 4, 5)
const fruits = ['apples', 'mango', 'banana']
fruits.push('grapes')
// To push on front
fruits.unshift('pears')

console.log(numbers);
console.log(fruits[0]);
fruits.pop();

console.log(Array.isArray(fruits));
console.log(fruits.indexOf('mango'));