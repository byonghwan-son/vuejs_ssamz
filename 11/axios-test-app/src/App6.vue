<script setup>
import axios from "axios";

const requestAPI = async () => {
  const url = "/api/todolist_long/gdhong"
  axios
      .get(url, { timeout: 900 })
      .then((response) => {
        console.log("# 응답객체 : ", response)
      })
      .catch((e) => {
        if(e instanceof Error) console.log(e.message)
        else console.log(e)
      })
}
requestAPI()
</script>
