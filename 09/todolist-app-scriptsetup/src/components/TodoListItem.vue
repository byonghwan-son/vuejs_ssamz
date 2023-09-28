<script setup>
const props = defineProps({
  todoItem: {type: Object, required: true}
})
const emits = defineEmits(["delete-todo", "toggle-completed"])
</script>

<template>
  <li class="list-group-item" :class="{ 'list-group-item-success' : todoItem.completed }"
      @click="emits('toggle-completed', todoItem.id)">
    <span class="pointer" :class="{ 'todo-done' : todoItem.completed }">
      {{ todoItem.todo }} {{ todoItem.completed ? "(완료)" : "" }}
    </span>
    <span class="float-end badge bg-secondary pointer"
          @click.stop="emits('delete-todo', todoItem.id)">삭제</span>
  </li>
</template>