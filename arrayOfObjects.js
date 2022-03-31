const todos = [
    {
        id: 1,
        text: 'Leetcode',
        isCompleted: true
    },
    {
        id: 2,
        text: 'CodeForces',
        isCompleted: false
    }
]

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos)
console.log(todoJSON);

// map

const todostasks = todos.map(function (todo) {
    return todo.text
})
// const todostasks = todos.map((todo) =>todo.text)

console.log(todostasks);

// filter
const todosIsCompleted = todos.filter(function (todo) {
    return todo.isCompleted == true
}).map(function (todo) {
    return todo.text
})

console.log(todosIsCompleted);