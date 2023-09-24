<template>
  <div>
    <Calc :x="10" />
  </div>
</template>

<script>
import Calc from "@/components/Calc.vue";

export default {
  name: "App",
  components: {Calc}
}
</script>

<style lang="scss" scoped>

</style>