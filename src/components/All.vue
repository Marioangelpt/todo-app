<script setup lang="ts">
import {reactive, ref, inject} from "vue"
import { addTodo } from '../composables/addTodo.js'
import { checkTodo } from '../composables/checkTodo.js'

let props = defineProps({
    todos: Array
})
let userInput = ref("")
</script>

<template>
    <main>
	<input type="text" class="details" v-model="userInput" @keyup.enter="addTodo(props.todos, userInput)">
	<button class="add__todo" @click="addTodo(props.todos, userInput)">Add</button>
	<div>
	    <template v-for="todo in props.todos">
		<input :id="todo.id" type="checkbox" class="inp__checkbox"  @click="checkTodo(props.todos, todo.id)" :checked="todo.completed == true">
		<label :for="todo.id" :class="['label__input',{active: todo.completed == true}]">{{todo.todo}}</label>
		<br>	
	    </template>
	</div>
    </main>
</template>

<style scoped>
.details{
    width: 36rem;
    height: 5.6rem;
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 1.4rem;
    border: .1rem solid #bdbdbd;
    border-radius: 1.2rem;
    outline: none;
    padding-left: 1.6rem;
}
.add__todo{
    width: 10.9rem;
    height: 5.6rem;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 1.4rem;
    color: #ffffff;
    border: none;
    border-radius: 1.2rem;
    outline: none;
    background-color: #2f80ed;
    cursor: pointer;
    margin-left: 1.6rem;
}
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
    animation: .3s complete ;
}
@keyframes complete{
   0%{
	text-decoration-color: transparent;
    }
    100%{
	text-decoration-color: #000;
    }
}
</style>
