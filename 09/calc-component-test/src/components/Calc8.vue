<template>
  <div>
    X : <input type="text" v-model.number="x"/><br>
    Y : <input type="text" v-model.number="y"/><br>
    <div>결과 : {{ result }}</div>
  </div>
</template>

<script>
import {watchEffect, ref} from "vue"

export default {
  name: "Calc8",
  setup(props, ctx) {
    console.log("props : ", props)  // 부모 컴포넌트로 부터 전달받는 속성(props)
    console.log("component context : ", ctx)  // 컴포넌트 컨텍스트(component context)

    const x = ref(10)
    const y = ref(20)
    const result = ref(0) // 의도적으로 0 으로 초기화

    // 감시 대상 데이터를 지정하지 않음.(watch 와 다른 점)
    // 무조건 등록된 함수를 1회 실행함. 이 때 result 의 값이 변경되어서 화면에 결과를 출력함.
    watchEffect(() => {
      result.value = x.value + y.value
      console.log(`${x.value} + ${y.value} = ${result.value}`)
    })

    return { x, y, result }
  }
}
</script>

<style>

</style>
