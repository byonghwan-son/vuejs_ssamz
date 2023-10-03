<template>
  <div class="container">
    <Header/>
    <router-view/>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import {reactive, computed, provide} from "vue";

const states = reactive({
  todoList: [
    {id: 1, todo: 'ES6학습', desc: '설명1', done: false},
    {id: 2, todo: 'React 학습', desc: '설명2', done: false},
    {id: 3, todo: 'ContextAPI 학습', desc: '설명3', done: true},
    {id: 4, todo: '야구경기 관람', desc: '설명4', done: false},
  ]
})

const addTodo = ({todo, desc}) => {
  states.todoList.push({id: new Date().getTime(), todo, desc, done: false})
}

const updateTodo = ({id, todo, desc, done}) => {
  let index = states.todoList.findIndex((todo) => todo.id === id)
  states.todoList[index] = {...states.todoList[index], todo, desc, done}
}

const deleteTodo = (id) => {
  let index = states.todoList.findIndex((todo) => todo.id === id)
  states.todoList.splice(index, 1)
}

const toggleDone = (id) => {
  let index = states.todoList.findIndex((todo) => todo.id === id)
  states.todoList[index].done = !states.todoList[index].done
}

// 상태 데이터를 provide 에 주입할 때 computed()를 이용해 계산된 속성으로 처리하여
// 반응성(reactivity)을 유지하도록 함. 상태라 할지라도 provide 로 주입하는 경우
// 반응성(reactivity)을 읽어버림.
provide('todoList', computed(() => states.todoList))
provide('actions', {addTodo, deleteTodo, toggleDone, updateTodo})
</script>

<style lang="scss" scoped>

</style>