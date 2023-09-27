<template>
  <div>
    X : <input type="text" v-model.number="x" /><br>
    Y : <input type="text" v-model.number="y" /><br>
    <button @click="calcAdd">계산</button>
    <div>결과 : {{result}}</div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "Calc2",
  setup(props, ctx) {
    console.log("props : ", props)  // 부모 컴포넌트로 부터 전달받는 속성(props)
    console.log("component context : ", ctx)  // 컴포넌트 컨텍스트(component context)
    const x = ref(10)  // ref()의 초기값 설정
    const y = ref(20)  // ref()의 초기값 설정
    const result = ref(30) // ref()의 초기값 설정

    const calcAdd = () => {
      result.value = x.value + y.value
    }

    return { x, y, result, calcAdd }
  }
}
</script>

<style>

</style>