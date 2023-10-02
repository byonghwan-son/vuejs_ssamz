<script setup>
import axios from "axios";

const listUrl = "/api/todolist_long/gdhong"
const todoUrlPrefix = "/api/todolist_long/gdhong/"


// 4건의 목록을 조회환 후 첫번째, 두번째 할 일을 순차적으로 조회합니다.
const requestAPI = async () => {
  let todoList = []

  try {
    let response = await axios.get(listUrl)
    todoList = response.data
    console.log("# TodoList : ", todoList)
    for(let i = 0; i < todoList.length; i++) {
      response = await axios.get(todoUrlPrefix + todoList[i].id)
      console.log(`# ${i + 1}번째 Todo : `, response.data)
    }
  } catch(e) {
    if(e instanceof Error) console.log(e.message)
    else console.log(e)
  }

  // let response = await axios.get(listUrl)
  // todoList = response.data
  // console.log("# TodoList : ", todoList)
  //
  // response = await axios.get(todoUrlPrefix + todoList[0].id)
  // console.log("## 첫번째 Todo : ", response.data)
  //
  // response = await axios.get(todoUrlPrefix + todoList[1].id)
  // console.log("## 두번째 Todo : ", response.data)
}

requestAPI()
</script>
