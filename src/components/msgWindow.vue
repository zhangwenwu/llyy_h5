<template>
  <div class="msgWindow">
    <div class="msg-bg" :style="{width:clientWidth+'px', height:clientHeight+'px'}">
      <div class="msg-window">
        <div class="message">{{message}}</div>
        <div class="msg-btn">
          <div class="msg-btn-left" @click="btnClick(true)">{{btnLeft}}</div>
          <div class="msg-btn-right" @click="btnClick(false)">{{btnRight}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'msgWindow',
  props: ['message', 'btnLeft', 'btnRight'],
  data () {
    return {
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
    btnClick: function (b) {
      this.$emit('btnClick', b)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/scss/cssrem";

  .msg-bg {
    position: fixed;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    right: 0;
    height: 100%;
    width: 100%;
    .msg-window {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: white;
      opacity: 1;
      width: px2rem(503px);
      height: px2rem(328px);
      margin: px2rem(360px) auto;
      border-radius: px2rem(10px);
      .message {
        padding-top: px2rem(104px);
        font-size: px2rem(36px);
        text-align: center;
        color: #333333;
      }
      .msg-btn {
        display: flex;
        text-align: center;
        border-top: px2rem(2px) solid #cccccc;
        .msg-btn-left {
          width: 50%;
          color: #00be3a;
          border-right: px2rem(2px) solid #cccccc;
        }
        .msg-btn-right {
          width: 50%;
          color: #333333;
        }
      }
    }
  }
</style>
