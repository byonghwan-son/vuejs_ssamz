<script setup>
import axios from "axios";

const requestAPI = async() => {
  const url = "/api/todolist/gdhong"
  const response = await axios.get(url)
  console.log("# 응답객체 : ", response)
}

requestAPI()
</script>
