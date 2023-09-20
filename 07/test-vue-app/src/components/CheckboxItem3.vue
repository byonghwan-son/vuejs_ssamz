<script>
  import Idol from "@/idol";

  export default {
    name: "CheckboxItem",
    props: {
      idol: Idol
    }
  }
</script>

<template>
  <li>
    <input type="checkbox" :checked="idol.checked" />{{ idol.name }}
  </li>
</template>

<style scoped>

</style>