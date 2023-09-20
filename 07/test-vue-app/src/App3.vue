<script>
  import CheckboxItem from "@/components/CheckboxItem3.vue";
  import Idol from "@/idol";
  export default {
    name: "App",
    components: { CheckboxItem },
    data() {
      return {
        idols: [
            new Idol(1, "BTS", true),
            new Idol(2, "Black Pink", false),
            new Idol(3, "EXO", false),
            new Idol(4, "ITZY", false),
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
      <CheckboxItem v-for="idol in idols" :idol="idol" />
    </ul>
  </div>
</template>
