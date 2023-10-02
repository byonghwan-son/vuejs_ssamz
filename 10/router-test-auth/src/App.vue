<template>
  <div class="container">
    <div>
      <router-link to="/">Home</router-link>&nbsp;
      <router-link to="/login">Login</router-link>&nbsp;
      <router-link to="/users">Users</router-link>&nbsp;
      <router-link to="/admins">Admins</router-link>&nbsp;
    </div>
    <hr>
    <!-- 요청된 URI 경로와 vue-router 객체의 routes 배열에 있는 경로를 비교하여 매칭된 라우트의 컴포넌트를 마운트합니다.-->
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
.container {
  margin-top: 10px;
}
</style>