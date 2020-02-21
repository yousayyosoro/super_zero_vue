<template>
<div class="">123</div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {}
    },
    created() {
    },
    destroyed() {
    },
    mounted() {
      this.getTotalPage()
    },
    computed: {},
    methods: {
      // 获取总页数
      getTotalPage(){
        let that = this;
        that.$axios.post("/public?name=app&fun=login_qrcode", {}, true).then(res => {
          console.log(res);
        })
      },
    }
  }
</script>

<style scoped>

</style>
