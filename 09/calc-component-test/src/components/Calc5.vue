<template>
  <div>
    X : <input type="text" v-model.number="x"/><br>
    <div>결과 : {{ result }}</div>
  </div>
</template>

<script>
import {watch, ref} from "vue"

export default {
  name: "Calc5",
  setup(props, ctx) {
    console.log("props : ", props)  // 부모 컴포넌트로 부터 전달받는 속성(props)
    console.log("component context : ", ctx)  // 컴포넌트 컨텍스트(component context)

    const x = ref(0)
    const result = ref(0)

    watch(x, (current, old) => {
      console.log(`${old} ==> ${current}`)
      result.value = current * 2
    })

    return {x, result}
  }
}
</script>

<style>

</style>