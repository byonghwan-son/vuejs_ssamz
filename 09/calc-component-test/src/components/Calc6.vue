<template>
  <div>
    X : <input type="text" v-model.number="state.x"/><br>
    <div>결과 : {{ state.result }}</div>
  </div>
</template>

<script>
import {watch, reactive} from "vue"

export default {
  name: "Calc6",
  setup(props, ctx) {
    console.log("props : ", props)  // 부모 컴포넌트로 부터 전달받는 속성(props)
    console.log("component context : ", ctx)  // 컴포넌트 컨텍스트(component context)

    const state = reactive({
      x: 0,
      result: 0
    })

    // state => getter 함수로 변경함.
    watch(() => state.x, (current, old) => {
      console.log(`${old} ==> ${current}`)
      state.result = current * 2
    })

    return { state }
  }
}
</script>

<style>

</style>