<template>
  <div>
    <input type="checkbox" :value="id" :checked="checked"
      @change="$emit('check-changed', { id, checked: $event.target.checked })" />
      <span v-if="checked === true" style="color:blue; text-decoration: underline;"><i>{{ label }}</i></span>
      <span v-else style="color:rgb(128,128,128);">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: "CheckBox1",
  props: ["id", "checked", "label"]
}
</script>

<style>

</style>