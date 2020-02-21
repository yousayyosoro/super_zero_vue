<template>
  <div id="app" class="fillcontain">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
  }
};
</script>
<style src='./assets/style/app.scss'></style>
<style src='./assets/iconfont/iconfont.css'></style>
<style>
#app {
  font-family: "Source Han Sans CN";
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #eaeaea;
}
</style>
