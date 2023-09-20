<script>
  export default {
    name: "InputName",
    //emits: ["nameChanged1"], // 의도적으로 오류 발생시킴(사용하지 않은 이벤트를 등록함)
    emits: {
      nameChanged: (e) => {
        return e.name && typeof (e.name) === "string" && e.name.trim().length >= 3
      },
    },
    data() {
      return {
        name: ""
      }
    }
  }
</script>

<template>
  <div style="border:solid 1px grey; padding: 5px;">
    이름 : <input type="text" v-model="name"/>
    <button @click="$emit('nameChanged', {name})">이벤트 발신</button>
  </div>
</template>
