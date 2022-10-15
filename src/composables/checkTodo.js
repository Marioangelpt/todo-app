export function checkTodo(todos,id){
    let index = todos.findIndex(todo => todo.id == id)
    if(todos[index].completed == true){
	todos[index] = {id: todos[index].id, todo: todos[index].todo, completed: false}
	localStorage.clear()
	localStorage.setItem("todos", JSON.stringify(todos))
    }else{
	todos[index] = {id: todos[index].id, todo: todos[index].todo, completed: true}	
	localStorage.clear()
	console.log(todos)
	localStorage.setItem("todos", JSON.stringify(todos))
    }
}
