<template>
  <div class="container">
    <Header/>
    <router-view/>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue"
import {reactive, computed, provide} from "vue"
import axios from "axios"

const owner = "byonghwan"
//의도적 지연 시간을 발생시키는 /todolist_long 이용
const BASEURI = "/api/todolist_long"
// const states = reactive({
//   todoList: [
//     {id: 1, todo: 'ES6학습', desc: '설명1', done: false},
//     {id: 2, todo: 'React 학습', desc: '설명2', done: false},
//     {id: 3, todo: 'ContextAPI 학습', desc: '설명3', done: true},
//     {id: 4, todo: '야구경기 관람', desc: '설명4', done: false},
//   ]
// })
const states = reactive({todoList: []})
// TodoList 목록을 조회합니다.
const fetchTodoList = async () => {
  try {
    const response = await axios.get(BASEURI + `/${owner}`)
    if (response.status === 200) {
      states.todoList = response.data
    } else {
      alert('데이터 조회 실패')
    }
  } catch (e) {
    alert('에러발생 :' + e)
  }
}

// 새로운 아이템 추가
const addTodo = async ({todo, desc}, successCallback) => {
  try {
    const payload = {todo, desc}
    const response = await axios.post(BASEURI + `/${owner}`, payload)
    if (response.data.status === "success") {
      states.todoList.push({id: response.data.item.id, todo, desc, done: false})
      successCallback();
    } else {
      alert('Todo 추가 실패 : ' + response.data.message)
    }
  } catch (e) {
    alert('에러발생 : ' + e)
  }
}

const updateTodo = async ({id, todo, desc, done}, successCallback) => {
  try {
    const payload = { todo, desc, done }
    const response = await axios.put(BASEURI + `/${owner}/${id}`, payload)
    if(response.data.status === "success") {
      let index = states.todoList.findIndex((todo) => todo.id === id)
      states.todoList[index] = {id, todo, desc, done}
      successCallback()
    } else {
      alert('Todo 변경 실패 : ' + response.data.message)
    }
  } catch(e) {
    alert('에러 발생 :' + e)
  }
}

const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(BASEURI + `/${owner}/${id}`)
    if(response.data.status === "success") {
      let index = states.todoList.findIndex((todo) => todo.id === id)
      states.todoList.splice(index, 1)
    }
    else {
      alert('Todo 삭제 실패 : ' + response.data.message)
    }
  } catch(e) {
    alert('에러발생 :' + e)
  }
}

const toggleDone = async (id) => {
  try {
    const response = await axios.put(BASEURI + `/${owner}/${id}/done`)
    if(response.data.status === "success") {
      let index = states.todoList.findIndex((todo) => todo.id === id)
      states.todoList[index].done = !states.todoList[index].done
    } else {
      alert('Todo 완료 변경 실패: ' + response.data.message)
    }
  } catch(e) {
    alert('에러발생 :' + e)
  }
}

// 상태 데이터를 provide 에 주입할 때 computed()를 이용해 계산된 속성으로 처리하여
// 반응성(reactivity)을 유지하도록 함. 상태라 할지라도 provide 로 주입하는 경우
// 반응성(reactivity)을 읽어버림.
provide('todoList', computed(() => states.todoList))
provide('actions', {addTodo, deleteTodo, toggleDone, updateTodo, fetchTodoList})
</script>