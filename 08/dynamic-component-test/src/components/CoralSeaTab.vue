<template>
  <div class="tab">
    <h1>산호해 해전에 대해</h1>
    <div>{{ (new Date().toTimeString()) }}</div>
    <p>정적 컨텐츠 - keep-alive 를 사용함.</p>
  </div>
</template>

<script>
export default {
  name: "CoralSeaTab"
}
</script>
