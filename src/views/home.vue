<template>
<div class="" style="width: 100%;">
  <mu-paper :z-depth="1" class="home-list">
    <mu-appbar color="grey900">
      <!--左边按钮-->
      <!--<mu-button icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button-->
      ★超零活动列表
      <!--右边按钮-->
      <!--<mu-button icon slot="right">
        <mu-icon value="search"></mu-icon>
      </mu-button>-->
    </mu-appbar>
    <mu-list>
      <mu-sub-header>今天</mu-sub-header>
      <mu-list-item :ripple="false">
        <div class="SZ-flex padding-tb16 width100" @click="goDetail()">
          <div class="img-box"  style="width: 300px;margin-right: 16px">
            <img src="http://q72m9s5e1.bkt.clouddn.com/img.jpg" width="100%">
          </div>
          <div class="width100">
            <div class="font-bold fontL">明日方舟主题摄影活动</div>
            <div class="" style="height: calc(100% - 160px);">
              <div class="fontM">
                2020.05.01-05.02 广州市 app摄影基地
              </div>
              <div class="" style="padding-top: 16px">
                <span class="fontS bg-red400" style="padding: 8px 16px;color: #ffffff">热门</span>
              </div>
            </div>
            <div class="flex-wrap-between width100">
              <div class="">
                <div class=""><span class="padding-r16 fontXL font-bold red400">￥66</span><span class="fontS">25/50人开团</span></div>
                <div class="grey600 fontM">"超多精彩在这里"</div>
              </div>
              <div class="tags red400 fontXL border-r400" style="padding: 8px 48px;margin-right: 32px">进行中</div>
            </div>
          </div>
        </div>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item :ripple="false" @click="goDetail()">
        <div class="SZ-flex padding-tb16 width100">
          <div class="img-box"  style="width: 300px;margin-right: 16px">
            <img src="http://q72m9s5e1.bkt.clouddn.com/img.jpg" width="100%">
          </div>
          <div class="width100">
            <div class="font-bold fontL">明日方舟主题摄影活动</div>
            <div class="fontM" style="height: calc(100% - 160px);">2020.05.01-05.02 广州市 app摄影基地</div>
            <div class="flex-wrap-between width100">
              <div class="">
                <div class=""><span class="padding-r16 fontXL font-bold red400">￥66</span><span class="fontS">25/50人开团</span></div>
                <div class="grey600 fontM">"超多精彩在这里"</div>
              </div>
              <div class="tags blue500 fontXL border-b500" style="padding: 8px 48px;margin-right: 32px">预约中</div>
            </div>
          </div>
        </div>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item :ripple="false" @click="goDetail()">
        <div class="SZ-flex padding-tb16 width100">
          <div class="img-box"  style="width: 300px;margin-right: 16px">
            <img src="http://q72m9s5e1.bkt.clouddn.com/img.jpg" width="100%">
          </div>
          <div class="width100">
            <div class="font-bold fontL">明日方舟主题摄影活动</div>
            <div class="fontM" style="height: calc(100% - 160px);">2020.05.01-05.02 广州市 app摄影基地</div>
            <div class="flex-wrap-between width100">
              <div class="">
                <div class=""><span class="padding-r16 fontXL font-bold red400">￥66</span><span class="fontS">25/50人开团</span></div>
                <div class="grey600 fontM">"超多精彩在这里"</div>
              </div>
              <div class="tags green500 fontXL border-g500" style="padding: 8px 48px;margin-right: 32px">已结束</div>
            </div>
          </div>
        </div>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item :ripple="false" @click="goDetail()">
        <div class="SZ-flex padding-tb16 width100">
          <div class="img-box"  style="width: 300px;margin-right: 16px">
            <img src="http://q72m9s5e1.bkt.clouddn.com/img.jpg" width="100%">
          </div>
          <div class="width100">
            <div class="font-bold fontL">明日方舟主题摄影活动</div>
            <div class="fontM" style="height: calc(100% - 160px);">2020.05.01-05.02 广州市 app摄影基地</div>
            <div class="flex-wrap-between width100">
              <div class="">
                <div class=""><span class="padding-r16 fontXL font-bold red400">￥66</span><span class="fontS">25/50人开团</span></div>
                <div class="grey600 fontM">"超多精彩在这里"</div>
              </div>
              <div class="tags grey600 fontXL border-grey600" style="padding: 8px 48px;margin-right: 32px">已过期</div>
            </div>
          </div>
        </div>
      </mu-list-item>
      <mu-divider></mu-divider>
    </mu-list>
  </mu-paper>
</div>
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
      // this.getTotalPage()
    },
    computed: {},
    methods: {
      goDetail(){
        console.log(1)
        this.$router.push({path: '/detail'})
      },
      // 获取总页数
      /*getTotalPage(){
        let that = this;
        that.$axios.post("/public?name=app&fun=login_qrcode", {}, true).then(res => {
          console.log(res);
        })
      },*/
    }
  }
</script>

<style scoped>
  .home-list {
    width: 100%;
    height: 100%;
    overflow-y: ;
  }
  /deep/ .mu-item{
    height: auto!important;
  }
</style>
