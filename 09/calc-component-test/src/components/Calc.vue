<template>
  <div>
    X : <input type="text" v-model.number="x" /><br>
    Y : <input type="text" v-model.number="y" /><br>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "Calc",
  setup(props, ctx) {
    console.log("props : ", props)  // 부모 컴포넌트로 부터 전달받는 속성(props)
    console.log("component context : ", ctx)  // 컴포넌트 컨텍스트(component context)
    const x = ref(10)
    const y = ref(20)
    return { x, y }
  }
}
</script>

<style>

</style>