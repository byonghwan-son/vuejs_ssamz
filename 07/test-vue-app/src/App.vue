<script>
  import CheckboxItem from "@/components/CheckboxItem.vue";
  export default {
    name: "App",
    components: { CheckboxItem }
  }
</script>

<template>
  <div>
    <h2>APP 컴포넌트</h2>
    <hr>
    <ul>
      <CheckboxItem />
      <CheckboxItem />
      <CheckboxItem />
      <CheckboxItem />
    </ul>
  </div>
</template>
