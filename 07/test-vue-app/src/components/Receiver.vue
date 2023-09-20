<script>
export default {
  name: "Receiver",
  created() {
    this.emitter.on("message", this.receiveHandler)
  },
  data() {
    return {
      textMessage: ""
    }
  },
  methods: {
    receiveHandler(msg) {
      this.textMessage = msg
    }
  }
}
</script>

<template>
  <div style="border: solid 1px rgb(128,128,128); margin: 5px; padding: 5px;">
    <h2>Receiver</h2>
    <hr>
    <h2>전송된 텍스트 : {{ textMessage }}</h2>
  </div>
</template>

<style scoped>

</style>