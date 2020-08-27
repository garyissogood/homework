<template>
  <div class="home" style="text-align:center">
    <img alt="Vue logo" src="@/assets/logo.png">
    <br>
    <router-link class="btn btn-outline-primary" to="/login">
      登入後台
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    };
  },
};
</script>
