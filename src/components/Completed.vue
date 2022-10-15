<script setup lang="ts">

import { checkTodo } from "../composables/checkTodo.js"

let props = defineProps({
    todos: Array
})
</script>
<template>
    <main>
	<div class="container">
	    <template v-for="todo in props.todos.filter(todo => todo.completed == true)">
		<input :id="todo.id" class="inp__checkbox" type="checkbox" @click="checkTodo(props.todos,todo.id)" checked>
		<label :for="todo.id" :class="['label__input', {active: todo.completed}]">{{todo.todo}}</label>
		<span class="material-symbols-outlined icon-trash" @click="$emit('delete-todo',todo.id)">delete</span>
		<br>
	    </template>
	    <button class="btn-delete" @click="$emit('delete-all')"><span class="material-symbols-outlined btn-icon">delete</span> Delete all</button>
	</div>
    </main>
</template>

<style>

.inp__checkbox{
position: relative;
top: 2.4rem;
width: 2.4rem;
height: 2.4rem;
margin-bottom: 1.6rem;
}
.inp__checkbox:last-child{
margin-bottom: 0rem;
}
.label__input{
position: relative;
top: 1.7rem;
left: .8rem;
font-family: "Montserrat";
font-weight: 500;
font-size: 1.8rem; 
}
.label__input.active{
    text-decoration: line-through; 
}
.icon-trash{
    position: absolute;
    left: 48rem;
    cursor: pointer;
    color: #BDBDBD;
    margin-top: 2.1rem;
}
.btn-delete{
    position: relative;
    left: 37.6rem;
    top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12.4rem;
    height: 4rem;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 1.2rem;
    background-color: #EB5757;
    color: #ffffff;
    border: none;
    border-radius: .4rem;
    cursor: pointer;
}
.btn-icon{
    font-size: 1.6rem;
}
</style>
