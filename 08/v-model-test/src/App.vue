<template>
  <div>
<!--    v-bind 형태로 할 때에는 @update:name으로 이벤트를 연결해 줘야 함.-->
    <InputName :name="searchName1" @update:name="changeSearchName" />
    <h3>검색어 v-bind : {{searchName1}}</h3>
<!--    v-model인 경우 @update:name 형태로 이벤트를 연결하지 않아도 자동으로 연결됨.-->
    <InputName v-model:name="searchName2" />
    <h3>검색어 v-model : {{searchName2}}</h3>
  </div>
</template>

<script>
import InputName from "@/components/InputName.vue";

export default {
  name: "App",
  components: {InputName},
  data() {
    return {
      searchName1: 'John',
      searchName2: 'Smith'
    }
  },
  methods: {
    changeSearchName(name) {
      console.log(name)
      this.searchName1 = name
    }
  }
}
</script>
<style>
</style>