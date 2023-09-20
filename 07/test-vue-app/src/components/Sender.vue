<script>
  export default {
    name: "Sender",
    methods: {
      sendMessage() {
        this.emitter.emit("message", Date.now() + "에 발신된 메시지.")
      }
    }
  }
</script>

<template>
  <div style="border: solid 1px rgb(128,128,128); margin: 5px; padding: 5px;">
    <h2>Sender</h2>
    <hr>
    <button @click="sendMessage">이벤트 발신</button>
  </div>
</template>

<style scoped>

</style>