<template>
  <div>
    <NoSlotTest />
    <SlotTest />
    <NamedSlotTest />
  </div>
</template>

<script>
import NoSlotTest from "@/components/NoSlotTest.vue";
import SlotTest from "@/components/SlotTest.vue";
import NamedSlotTest from "@/components/NamedSlotTest.vue";

export default {
  name: "App",
  components: {NamedSlotTest, NoSlotTest, SlotTest}

}
</script>

<style lang="scss" scoped>

</style>