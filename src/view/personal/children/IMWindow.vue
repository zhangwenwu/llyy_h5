<template>
  <div class="IMWindow">
    <header-top titleName="思思追忆" isIndex="no"></header-top>
    <div class="all-view" :style="{'min-height':viewHeight+'px'}">
      <div class="window">
        <div class="time"><span>5月17日 下午14:51</span></div>
        <div class="mine-msg">
          <img src="../../../assets/img/personal/pensonal_top.jpg"/>
          <div class="bubble"></div>
          <div class="bubble-div">您好！在吗？我想了解一下关于如何办理排污许可证的相关信息...</div>
        </div>
        <div class="other-msg">
          <img src="../../../assets/img/personal/pensonal_top.jpg"/>
          <div class="bubble"></div>
          <div class="bubble-div">您好！在吗？我想了解一下关于如何办理排污许可证的相关信息...</div>
        </div>
      </div>
      <div class="bottom">
        <div class="input">
          <input/>
          <div class="submit-btn">发送</div>
        </div>
        <div class="others-btn">
          <div class="smile"></div>
          <div class="folder"></div>
          <div class="pic"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IMWindow',
    data () {
      return {
        viewHeight: 0
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.viewHeight = document.querySelector('html').getAttribute('data-dpr') * window.screen.height - document.getElementsByClassName('bottom')[0].clientHeight - document.getElementsByClassName('header-top')[0].clientHeight
      })
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/scss/cssrem";

  .all-view {
    background-color: #f0f0f0;
    padding-bottom: px2rem(168px);
  }

  .window {
    width: px2rem(710px);
    margin: auto;
    .time {
      text-align: center;
      padding-top: px2rem(20px);
      span {
        color: white;
        background-color: #dadada;
        font-size: px2rem(24px);
        padding: px2rem(5px);
      }
    }
    .mine-msg {
      display: flex;
      flex-direction: row-reverse;
      margin-top: px2rem(60px);
      img {
        width: px2rem(78px);
        height: px2rem(78px);
        border-radius: 50%;
        margin-top: px2rem(10px);
      }
      .bubble {
        width: 0;
        height: 0;
        border-right: px2rem(15px) solid transparent;
        border-top: px2rem(15px) solid #00be3c;
        margin: px2rem(40px) px2rem(10px) 0 0;
      }
      .bubble-div {
        padding: px2rem(20px) px2rem(28px);
        border-radius: px2rem(20px);
        line-height: px2rem(45px);
        font-size: px2rem(30px);
        background-color: #00be3c;
        color: white;
        width: px2rem(460px);
      }
    }
    .other-msg {
      display: flex;
      margin-top: px2rem(60px);
      img {
        width: px2rem(78px);
        height: px2rem(78px);
        border-radius: 50%;
        margin-top: px2rem(10px);
      }
      .bubble {
        width: 0;
        height: 0;
        border-left: px2rem(15px) solid transparent;
        border-top: px2rem(15px) solid #ffffff;
        margin: px2rem(40px) 0 0 px2rem(10px);
      }
      .bubble-div {
        padding: px2rem(20px) px2rem(28px);
        border-radius: px2rem(20px);
        line-height: px2rem(45px);
        font-size: px2rem(30px);
        background-color: white;
        color: black;
        width: px2rem(460px);
      }
    }
  }

  .bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: px2rem(168px);
    .input {
      display: flex;
      justify-content: space-around;
      input {
        height: px2rem(70px);
        width: px2rem(610px);
        border: none;
        background-color: white;
        padding-left: px2rem(20px);
        font-size: px2rem(32px);
      }
      .submit-btn {
        width: px2rem(90px);
        line-height: px2rem(70px);
        text-align: center;
        color: white;
        background-color: #00be3a;
        border-radius: px2rem(4px);
      }
    }
    .others-btn {
      display: flex;
      div {
        width: px2rem(56px);
        height: px2rem(56px);
        margin: px2rem(20px);
      }
      .smile {
        background: url("../../../assets/img/personal/smile.png") no-repeat;
        background-size: px2rem(56px);
      }
      .folder {
        background: url("../../../assets/img/personal/folder.png") no-repeat;
        background-size: px2rem(56px);
      }
      .pic {
        background: url("../../../assets/img/personal/pic.png") no-repeat;
        background-size: px2rem(56px);
      }
    }
  }
</style>
