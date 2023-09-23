<template>
  <div>
    <NoSlotTest />
    <SlotTest />
    <NamedSlotTest />
    <ScopedSlotTest />
  </div>
</template>

<script>
import NoSlotTest from "@/components/NoSlotTest.vue";
import SlotTest from "@/components/SlotTest.vue";
import NamedSlotTest from "@/components/NamedSlotTest.vue";
import ScopedSlotTest from "@/components/ScopedSlotTest.vue";

export default {
  name: "App",
  components: {ScopedSlotTest, NamedSlotTest, NoSlotTest, SlotTest}

}
</script>

<style lang="scss" scoped>

</style>