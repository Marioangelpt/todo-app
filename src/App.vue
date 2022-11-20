<script setup lang="ts">
import All from "./components/All.vue"
import Active from "./components/Active.vue"
import Completed from "./components/Completed.vue"
import {ref, reactive, provide, onMounted} from "vue"

let currentTab = ref("All")

let tabs = {
    All,
    Active,
    Completed
}

let todos = ref([])
onMounted(()=>{
    if(localStorage.getItem("todos") != null){
        todos.value = JSON.parse(localStorage.getItem("todos"))
    }else{
	todos.value = []
    }
})
function deleteTodo(id){
    let todo = todos.value.filter(todo => todo.id != id)
    todos.value = todo
    localStorage.setItem("todos", JSON.stringify(todos.value))
}
function deleteAllCompletedTodos(){
    let todo = todos.value.filter(todo => todo.completed == false)
    todos.value = todo
    localStorage.setItem("todos", JSON.stringify(todos.value))
}
</script>

<template>
    <header class="header">
        <h1 class="title">#todo</h1>
    </header> 
    <main class="main">
	<div class="line">
	    <button v-for="(_,tab) in tabs" :key="tab" :class="['button__tab', {active: currentTab === tab}]" @click="currentTab = tab">{{tab}}</button>
	</div>
	<KeepAlive>
	<component :is="tabs[currentTab]" :class="currentTab != 'Completed'? 'tab' : 'completed'" :todos="todos" @delete-all="deleteAllCompletedTodos()" @delete-todo="id => deleteTodo(id)"></component>
	</KeepAlive>
    </main>
</template>

<style scoped>
.header{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 99.1vw;
    height: 10rem;
}
.title{
    font-family: "Raleway";
    font-weight: 700;
    font-size: 3.6rem;
    color: #333;
}
.main{
    width: 99.1vw;
    height: 80vh;
    display: flex;
    justify-content: center;
}
.button__tab{
    width: 9.6rem;
    height: 5.6rem;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 1.4rem;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    margin-right: 7.2rem;
}
.button__tab:nth-child(3){
    margin-right: 0rem;
    margin-left: 1.6em;
}
.button__tab.active{
    border-bottom: .2rem solid #2F80ED;
}
.line{
    position: relative;
    top: 3.2rem;
    display: flex;
    justify-content: center;
    width: 50.4rem;
    height: 5.6rem;
    border-bottom: .1rem solid #BDBDBD;
}
.tab{
    position: absolute;
    top: 23.2rem;
    left: 70.8rem; 
}
.completed{
    position: absolute;
    top: 20rem;
    left: 70.8rem;
}
</style>
