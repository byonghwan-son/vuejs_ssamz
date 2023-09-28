<template>
  <div>
    X : <input type="text" v-model.number="x"/><br>
    Y : <input type="text" v-model.number="y"/><br>
    <div>결과 : {{ result }}</div>
  </div>
</template>

<script>
import {watch, ref} from "vue"

export default {
  name: "Calc7",
  setup(props, ctx) {
    console.log("props : ", props)  // 부모 컴포넌트로 부터 전달받는 속성(props)
    console.log("component context : ", ctx)  // 컴포넌트 컨텍스트(component context)

    const x = ref(10)
    const y = ref(20)
    const result = ref(30)

    // state => getter 함수로 변경함.
    watch([x, y], ([currentX, currentY], [oldX, oldY]) => {
      if(currentX !== oldX) console.log(` : ${oldX} ==> ${currentX}`)
      if(currentY !== oldY) console.log(` : ${oldY} ==> ${currentY}`)

      result.value = currentX + currentY
    })

    return { x, y, result }
  }
}
</script>

<style>

</style>