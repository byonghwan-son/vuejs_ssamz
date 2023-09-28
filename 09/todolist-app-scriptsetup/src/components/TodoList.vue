<script setup>
  import TodoListItem from "@/components/TodoListItem.vue";

  const emits = defineEmits(["delete-todo", "toggle-completed"])
  const props = defineProps({
    todoList: { type : Array, required: true }
  })
</script>

<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <TodoListItem v-for="todoItem in todoList" :key="todoItem.id"
                      :todoItem="todoItem"
                      @delete-todo="emits('delete-todo', todoItem.id)"
                      @toggle-completed="emits('toggle-completed', todoItem.id)"
        />
      </ul>
    </div>
  </div>
</template>
