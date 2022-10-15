export function addTodo(todos, userInput){
    let newTodo = { id: Math.floor(Math.random() * 10000), todo: userInput, completed: false }
    todos.push(newTodo)
    console.log(newTodo)
    localStorage.setItem("todos", JSON.stringify(todos))
}
