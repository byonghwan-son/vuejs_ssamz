<template>
  <div>
    X : <input type="text" v-model.number="state.x"/><br>
    Y : <input type="text" v-model.number="state.y"/><br>
    <button @click="calcAdd">계산</button>
    <div>결과 : {{ state.result }}</div>
  </div>
</template>

<script>
import {reactive} from "vue";

export default {
  name: "Calc3",
  setup(props, ctx) {
    console.log("props : ", props)  // 부모 컴포넌트로 부터 전달받는 속성(props)
    console.log("component context : ", ctx)  // 컴포넌트 컨텍스트(component context)
    const state = reactive({
      x: 10,
      y: 20,
      result: 30
    })

    const calcAdd = () => {
      state.result = state.x + state.y
    }

    return {state, calcAdd}
  }
}
</script>

<style>

</style>