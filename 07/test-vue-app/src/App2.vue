<script>
  import CheckboxItem from "@/components/CheckboxItem2.vue";
  export default {
    name: "App",
    components: { CheckboxItem },
    data() {
      return {
        idols: [
          {id:1, name:"BTS", checked:false},
          {id:2, name:"Black Pink", checked:false},
          {id:3, name:"EXO", checked:true},
          {id:4, name:"ITZY", checked:false},
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
      <CheckboxItem v-for="idol in idols" :key="idol.id" :idol="idol" />
    </ul>
  </div>
</template>
