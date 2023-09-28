<template>
  <div>
    X : <input type="text" v-model.number="state.x"/><br>
    Y : <input type="text" v-model.number="state.y"/><br>
    <div>결과 : {{ result }}</div>
  </div>
</template>

<script>
import {reactive, computed} from "vue"

export default {
  name: "Calc4",
  setup(props, ctx) {
    console.log("props : ", props)  // 부모 컴포넌트로 부터 전달받는 속성(props)
    console.log("component context : ", ctx)  // 컴포넌트 컨텍스트(component context)
    const state = reactive({
      x: 10,
      y: 20
    })
    const result = computed(() => {
      return state.x + state.y
    })
    console.log("result(결과 확인은 value 속성을 이용해야 함) : " + result)  // [object Object]
    console.log("result(결과 확인은 value 속성을 이용해야 함) : " + result.value)  // [30]

    return {state, result}
  }
}
</script>

<style>

</style>