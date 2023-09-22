<template>
  <div>
    <h3>당신이 경험한 프론트 엔드 기술은?(첫번째:Slot사용(X))</h3>
    <CheckBox2 v-for="item in items" :key="item.id" :id="item.id"
               :label="item.label"
               :checked="item.checked" @check-changed="CheckBoxChanged">
<!--      슬롯으로 전달되는 영역 시작  -->
      <span v-if="item.checked === true" style="color:blue; text-decoration: underline;"><i>{{ item.label }}</i></span>
      <span v-else style="color:rgb(128,128,128);">{{ item.label }}</span>
<!--      슬롯으로 전달되는 영역 종료-->
    </CheckBox2>
  </div>
</template>

<script>
import CheckBox2 from "@/components/CheckBox2.vue";

export default {
  name: "SlotTest",
  components: {CheckBox2},
  data() {
    return {
      items: [
        { id: "V", checked: true, label: "Vue" },
        { id: "A", checked: false, label: "Angular" },
        { id: "R", checked: false, label: "React" },
        { id: "S", checked: false, label: "Svelte" },
      ]
    }
  },
  methods: {
    CheckBoxChanged(e) {
      let item = this.items.find((item) => item.id === e.id)
      item.checked = e.checked
    }
  }

}
</script>

<style lang="scss" scoped>

</style>