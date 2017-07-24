<template>
  <div class="footer-bar">
    <router-link to="/" class="footer-btn">
      环保需求
    </router-link>
    <router-link to="Recommend" class="footer-btn">
      优质推荐
    </router-link>
    <router-link to="Issue" class="footer-btn">
      <img src="../assets/img/footer/issue_nav.png"/>
      发布需求
    </router-link>
    <router-link to="Consult" class="footer-btn">
      环保资讯
    </router-link>
    <div class="footer-btn" @click="IMIsShowChange">
      环保咨询
      <div class="IM-open" v-if="IMIsShow" :style="{height:clientHeight+'px', width:clientWidth+'px'}"></div>
      <div class="IM-list" @click="IMIsShowNoChange" v-if="IMIsShow">
        <a href="http://p.qiao.baidu.com/cps/chat?siteId=9759310&userId=21364156"><div>环保业务咨询</div></a>
        <a href="http://p.qiao.baidu.com/cps/chat?siteId=9759310&userId=21364156"><div>平台使用咨询</div></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footer-bar',
    data () {
      return {
        IMIsShow: false,
        clientWidth: 0,
        clientHeight: 0
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        let thisScreen = document.querySelector('html').getAttribute('data-dpr')
        this.clientWidth = window.screen.width * thisScreen
        this.clientHeight = window.screen.height * thisScreen
      })
    },
    methods: {
      IMIsShowChange: function () {
        this.IMIsShow = !this.IMIsShow
      },
      IMIsShowNoChange: function () {
        this.IMIsShow = !this.IMIsShow
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/scss/cssrem.scss";

  $px: 1px;
  $background-img: url(../assets/img/footer/requirement_nav.png) url(../assets/img/footer/recommend_nav.png) none url(../assets/img/footer/consult_nav.png) url(../assets/img/footer/IM_nav.png);
  $background-img-on: url(../assets/img/footer/requirement_nav_on.png) url(../assets/img/footer/recommend_nav_on.png) none url(../assets/img/footer/consult_nav_on.png) url(../assets/img/footer/IM_nav_on.png);

  .footer-bar {
    position: fixed;
    bottom: 0;
    z-index: 100;
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: px2rem(98px);
    border-top: 1px solid #dbdbdb;
    background-color: #ffffff;
  }

  .IM-open{
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 101;
    background-color: black;
    opacity: 0.3;
  }

  .IM-list{
    background: url(../assets/img/footer/IM_show.png) no-repeat;
    background-size: px2rem(240px) px2rem(240px);
    opacity: 1;
    z-index: 102;
    height: px2rem(240px);
    width: px2rem(240px);
    bottom: px2rem(90px);
    right: px2rem(25px);
    @extend .IM-open;
    div {
      line-height: px2rem(60px);
      height: px2rem(60px);
      width: px2rem(192px);
      margin: px2rem(35px) px2rem(24px);
      background-color: #00be3a;
      color: white;
      border-radius: px2rem(30px);
    }
  }

  .index .footer-btn:nth-child(1) {
    background: nth($background-img-on, 1) center px2rem(18px) no-repeat;
    color: #00be3a;
    background-size: px2rem(40px);
  }


  @mixin footer-btn {
    .footer-btn {
      font-size: 10*$px;
      text-align: center;
      color: #666666;
      line-height: px2rem(150px);
    }
  }

  @mixin footer-btn3 {
    .footer-btn:nth-child(3) {
      font-size: 12*$px;
      font-weight: bold;
      img {
        width: px2rem(92px);
        position: absolute;
        bottom: px2rem(45px);
        margin-right: px2rem(10px);
      }
    }
  }

  @for $i from 1 through length($background-img) {
    .footer-btn:nth-child(#{$i}) {
      background: nth($background-img, $i) center px2rem(18px) no-repeat;
      background-size: px2rem(40px);
    }
    @each $view,$img in (requirement: nth($background-img-on, 1),recommend:nth($background-img-on, 2),consult:nth($background-img-on, 4)) {
      .#{$view}{
        @each $view-index,$index in (requirement:1,recommend:2,consult:4) {
          @if $view-index==$view {
            .footer-btn:nth-child(#{$index}) {
              background: $img center px2rem(18px) no-repeat;
              color: #00be3a;
              background-size: px2rem(40px);
            }
          }
        }
      }
    }
  }

  @for $i from 1 through 3 {
    [data-dpr="#{$i}"] {
      $px: $i*1px;
      @include footer-btn;
      @include footer-btn3;
      .IM-list div{
        font-size: $i*12px;
      }
    }
  }

</style>
