<script>
import CheckboxItem from "@/components/CheckboxItem.vue";

export default {
  name: "App",
  components: {CheckboxItem},
  data() {
    return {
      idols: [
        {id: 1, name: "BTS", checked: true}, // 오류 발생
        {id: 2, name: "Black Pink"},
        {id: 3, name: "EXO"}, // 오류 발생
        {id: 4, name: "ITZY"},
      ]
    }
  }
}
</script>

<template>
  <div>
    <h2>관심있는 K-POP 가수?</h2>
    <hr>
    <ul>
      <!--      <CheckboxItem v-for="idol in idols" :key="idol.id"-->
      <!--                    :name="idol.name" :checked="idol.checked" />-->
      <!--      자식 컴포넌트의 속성명과 전달하는 객체 내부의 속성명이 일치-->
      <!--      <CheckboxItem v-for="idol in idols" :key="idol.id" v-bind="idol" />-->
      <CheckboxItem v-for="idol in idols" :key="idol.id"
                    :id="idol.id" :name="idol.name" :checked="idol.checked"/>
    </ul>
  </div>
</template>
