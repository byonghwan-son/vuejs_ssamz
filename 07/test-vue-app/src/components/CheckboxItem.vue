<script>
  export default {
    name: "CheckboxItem",
    props: {
      id: [Number, String],
      // name: String,
      name: {
        // 검증함수 사용 (validator)
        validator(value) {
          return typeof(value) !== "string" ?
              false :
              value.trim().length >= 4
        }
      },
      checked: {
        type: Boolean,
        required: false,
        default: false
      }
    }
  }
</script>

<template>
  <li>
    <input type="checkbox" :checked="checked" />{{ id }} - {{ name }}
  </li>
</template>

<style scoped>

</style>