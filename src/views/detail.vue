<template>
  <div class="relative">
    <div class="header width100 bg-w">
      <div class="btn-bm grey600 fontS" @click="back">返回</div>
    </div>
    <mu-container>
      <mu-card style="width: 100%; margin: 0 auto;padding: 80px 0;box-sizing: border-box">
        <mu-card-media>
          <img src="http://q72m9s5e1.bkt.clouddn.com/img.jpg">
        </mu-card-media>
        <mu-card-title title="明日方舟主题摄影活动" sub-title="2020.05.01-05.02 广州市 app摄影基地"></mu-card-title>
        <mu-card-text>
          散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
          调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
          似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
          找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
          散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
          调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
          似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
          找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
        </mu-card-text>
        <mu-card-actions>
<!--          <mu-button flat>Action 2</mu-button>-->
        </mu-card-actions>
      </mu-card>
    </mu-container>
    <div class="footer width100">
      <div class="btn-bm2 width100 bg-red400 fontXL text-center" @click="isPopup = true">立即参加</div>
    </div>
    <div class="popup" v-if="isPopup">
      <div class="absolute-center bg-w" style="z-index: 9">
        <img src="/static/QRcord.jpg" style="width: 600px"/>
        <div class="text-center fontXXL font-bold">或添加客服QQ:2691361970报名</div>
<!--        <div class="text-center fontXXL font-bold">报名码：46446</div>-->
      </div>
      <div class="bg" @click="isPopup = false"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detail",
    data() {
      return {
        isPopup:false
      }
    },
    created() {
    },
    destroyed() {
    },
    mounted() {
    },
    computed: {},
    methods: {
      back(){
        this.$router.back(-1)
      },
      goAttend(){

      },
      close(){
        console.log(1)
        this.isPopup = false;
      }
    }
  }
</script>

<style scoped>
.btn-bm2{
  padding: 16px 32px;
  color: #eeeeee;
}
.btn-bm{
  display: inline-block;
  padding: 16px 32px;
  color: #eeeeee;
}
  .header{
    position: fixed;
    top: 0;
    z-index: 99;
  }
  .footer{
    position: fixed;
    z-index: 99;
    bottom: 0;
  }
  .popup{
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    z-index: 999;
  }
  .bg{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
  }
</style>
