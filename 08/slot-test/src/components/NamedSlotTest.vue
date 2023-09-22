<template>
  <div>
    <h3>당신이 경험한 프론트 엔드 기술은?(세번째 : Named Slot 사용)</h3>
    <CheckBox3 v-for="item in items" :key="item.id" :id="item.id"
               :label="item.label"
               :checked="item.checked" @check-changed="CheckBoxChanged">
      <!--      슬롯으로 전달되는 영역 시작  -->
      <template v-slot:icon>
        <i v-if="item.checked" class="far fa-grin-beam"></i>
        <i v-else class="far fa-frown"></i>
      </template>
      <template v-slot:label>
        <span v-if="item.checked" style="color:blue; text-decoration: underline;"><i>{{ item.label }}</i></span>
        <span v-else style="color:rgb(128,128,128);">{{ item.label }}</span>
      </template>
<!--      슬롯으로 전달되는 영역 종료-->
    </CheckBox3>
  </div>
</template>

<script>
import CheckBox3 from "@/components/CheckBox3.vue";

export default {
  name: "NamedSlotTest",
  components: {CheckBox3},
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

<style>
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css");
</style>