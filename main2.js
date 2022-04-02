// Single Element

console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

// Multiple Element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

// Looping
const items = document.querySelectorAll('.item')

items.forEach((item) =>{
    console.log(item);
})