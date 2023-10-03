<script setup>
import axios from "axios";

const listUrl = "/api/todolist_long/gdhong"
const todoUrlPrefix = "/api/todolist_long/gdhong/"

// 4건의 목록을 조회환 후 첫번째, 두번째 할 일을 순차적으로 조회합니다.
const requestAPI = () => {
  let todoList = []
  axios
      .get(listUrl)
      .then((response) => {
        todoList = response.data
        console.log("# TodoList : ", todoList)
        return todoList[0].id
      })
      .then((id) => {
        return axios.get(todoUrlPrefix + id)
      })
      .then((response) => {
        console.log("## 첫번째 Todo : ", response.data)
        return todoList[1].id
      })
      .then((id) => {
        axios.get(todoUrlPrefix + id).then((response) => {
          console.log("## 두번째 Todo : ", response.data)
        })
      })
      .catch((e) => {
        if(e instanceof Error) console.log(e.message)
        else console.log(e)
      })
}

requestAPI()
</script>
