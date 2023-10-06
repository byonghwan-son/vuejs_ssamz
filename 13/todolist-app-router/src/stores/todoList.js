import {defineStore} from "pinia"
import axios from 'axios'

const owner = "byonghwan"

const BASEURI = "/api/todolist_long"

// 옵션 API 방식의 todoList1 스토어 (객체 정의 방식)
export const useTodoListStore = defineStore("todoList1", {
    // 상태 정의(todoList, isLoading)
    // isLoading : Loading 컴포넌트를 보여줄지 여부 결정을 위한 상태
    state: () => ({
        todoList: [],
        isLoading: false
    }),
    // 읽기 전용의 게터
    // doneCount : 완료된 할 일의 건수를 읽기 전용으로 제공
    getters: {
        doneCount: (state) => {
            const filtered = state.todoList.filter((todoItem) => todoItem.done === true)
            return filtered.length
        }
    },
    // 액션
    // 비동기처리 시작에서 isLoading = true, 비동기 처리 완료 후 isLoading=false
    actions: {
        async fetchTodoList() {
            this.isLoading = true
            try {
                const response = await axios.get(BASEURI + `/${owner}`)
                if (response.status === 200) {
                    this.todoList = response.data
                } else {
                    alert('데이터 조회 실패')
                }
                this.isLoading = false
            } catch (error) {
                alert('에러 발생 : ' + error)
                this.isLoading = false
            }
        },
        async addTodo({todo, desc}, successCallback) {
            if (!todo || todo.trim() === '') {
                alert('할 일은 반드시 입력해야 합니다.')
                return
            }
            this.isLoading = true
            try {
                const payload = {todo, desc}
                const response = await axios.post(BASEURI + `/${owner}`, payload)
                if (response.data.status === 'success') {
                    this.todoList.push({id: response.data.item.id, todo, desc, done: false})
                    successCallback()
                } else {
                    alert('Todo 추가 실패 : ' + response.data.message)
                }
                this.isLoading = false
            } catch (e) {
                alert('에러 발생 : ' + e)
                this.isLoading = false
            }
        },
        async updateTodo({id, todo, desc, done}, successCallback) {
            if (!todo || todo.trim() === "") {
                alert('할 일은 반드시 입력해야 합니다.')
                return
            }
            this.isLoading = true

            try {
                const payload = {todo, desc, done}
                const response = await axios.put(BASEURI + `/${owner}/${id}`, payload)
                if (response.data.status === "success") {
                    let index = this.todoList.findIndex((todo) => todo.id === id)
                    this.todoList[index] = {id, todo, desc, done}
                    successCallback()
                } else {
                    alert('Todo 변경 실패 : ' + response.data.message)
                }
                this.isLoading = false
            } catch(e) {
                alert('에러 발생 : ' + e)
                this.isLoading = false
            }
        },
        async deleteTodo(id) {
            this.isLoading = true
            try {
                const response = await axios.delete(BASEURI + `/${owner}/${id}`)
                if(response.data.status === "success") {
                    let index = this.todoList.findIndex((todo) => todo.id === id)
                    this.todoList.splice(index, 1)
                } else {
                    alert('Todo 삭제 실패 : ' + response.data.message)
                }
                this.isLoading = false
            } catch(e) {
                alert('에러 발생 : ' + e)
                this.isLoading = false
            }
        },
        async toggleDone(id) {
            this.isLoading = true
            try {
                const response = await axios.put(BASEURI + `/${owner}/${id}/done`)
                if(response.data.status === "success") {
                    let index = this.todoList.findIndex((todo) => todo.id === id)
                    this.todoList[index].done = !this.todoList[index].done
                } else {
                    alert('Todo 완료 변경 실패 : ' + response.data.message)
                }
                this.isLoading = false
            } catch(e) {
                alert('에러 발생 : ' + e)
                this.isLoading = false
            }
        }
    }
})

// 컴포지션 API 방식의 todoList2 스토어 (메소드 리턴형)