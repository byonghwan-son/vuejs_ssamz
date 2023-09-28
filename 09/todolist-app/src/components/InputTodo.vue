<script>
import {ref} from "vue";

export default {
  name: "InputTodo",
  setup(props, context) {
    const todo = ref('')
    const addTodoHandler = () => {
      if (todo.value.length >= 2) {
        context.emit("add-todo", todo.value)
        todo.value = ''
      }
    }

    return { todo, addTodoHandler }
  }
}
</script>

<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <input type="text" id="msg" class="form-control" name="msg"
               placeholder="할 일을 여기에 입력!" v-model.trim="todo"
               @keyup.enter="addTodoHandler"/>
        <span class="btn btn-primary input-group-addon"
              @click="addTodoHandler">추가</span>
      </div>
    </div>
  </div>
</template>
