<template>
  <div class="HWSubmit">
    <div class="HWSubmit-title"><span>危废处理方案&网上申报服务</span></div>
    <hr class="HWSubmit-title-hr"/>
    <div class="input-list">
      <div class="list-span list-span-first">服务镇区：</div>
      <city-bar></city-bar>
    </div>
    <div class="input-list">
      <div class="list-span">服务期限：</div>
      <div>三个月</div>
    </div>
    <div class="input-list">
      <div class="list-span">主要服务：</div>
      <div class="list-check" @click="isCheckClickMain" :class="{'is-check':isCheckMain}">危废申报服务（2000元）</div>
    </div>
    <div class="input-list">
      <div class="list-span">其它服务：</div>
      <div>
        <div class="list-check others" @click="isCheckClick(1)" :class="{'is-check': isCheckIndex == 1}">台账申报（2000元）</div>
        <div class="list-check others" @click="isCheckClick(2)" :class="{'is-check': isCheckIndex == 2}">危废规范化服务（2880元）</div>
        <div class="list-check others" @click="isCheckClick(3)" :class="{'is-check': isCheckIndex == 3}">台账申报+危废规范化服务（4880元）</div>
      </div>
    </div>
    <div class="input-list">
      <div class="list-span">是否开具发票：</div>
      <div class="yes-no">
        <div @click="isCheckClickYes(true)" :class="{'is-check': isCheckYes}">是</div>
        <div @click="isCheckClickYes(false)" :class="{'is-check': !isCheckYes}">否</div>
      </div>
    </div>
    <div class="input-list">
      <div class="list-span">发票抬头：</div>
      <div class="invoice-person">
        <input type="text">
        <div>全额付开票内容：咨询服务费3%</div>
      </div>
    </div>
    <router-link to="/submitOrders"><div class="SubmitBtn">提交</div></router-link>
    <div class="SubmitBtn-bottom">已有<span>1866</span>人提交订单</div>
  </div>
</template>

<script>
export default{
  name: 'HWSubmit',
  data () {
    return {
      isCheckMain: true,
      isCheckIndex: 1,
      isCheckYes: false
    }
  },
  methods: {
    isCheckClickMain: function () {
      this.isCheckMain = !this.isCheckMain
    },
    isCheckClick: function (index) {
      this.isCheckIndex = index
    },
    isCheckClickYes: function (boolean) {
      this.isCheckYes = boolean
    }
  }
}

</script>

<style scoped lang="scss">
  @import "../assets/css/scss/cssrem";

  .HWSubmit{
    padding-bottom: px2rem(98px);
    border-top: px2rem(20px) solid #f0f0f0;
  }

  .HWSubmit-title {
    height: px2rem(85px);
    line-height: px2rem(85px);
    margin-left: px2rem(30px);
    span {
      color: #333333;
      border-left: px2rem(4px) solid #333333;
      font-size: px2rem(32px);
      padding-left: px2rem(16px);
    }
  }

  .HWSubmit-title-hr {
    border-color: #f5f5f5;
    opacity: 0.3;
    width: px2rem(676px);
    margin: 0 0 px2rem(78px) px2rem(30px);
  }

  .input-list{
    font-size: px2rem(28px);
    line-height: px2rem(60px);
    display: flex;
    margin-bottom: px2rem(20px);
    .list-span {
      width: px2rem(220px);
      text-align: right;
    }
    .list-span-first {
       padding-top: px2rem(8px);
     }
    .yes-no{
      display: flex;
      div {
        border: px2rem(2px) solid #bfbfbf;
        width: px2rem(110px);
        border-radius: px2rem(4px);
        text-align: center;
        margin-right: px2rem(20px);
      }
    }
    .list-check {
      padding: 0 px2rem(20px);
      border: px2rem(2px) solid #bfbfbf;
      border-radius: px2rem(4px);
      &.others{
        margin-bottom: px2rem(20px);
      }
    }
  }

  .is-check {
    background-color: #00be3a;
    border-color: #00be3a !important;
    color: white;
  }

  .invoice-person {
    input {
      width: px2rem(490px);
      height: px2rem(58px);
      border: px2rem(2px) solid #bfbfbf;
      border-radius: px2rem(4px);
      padding: 0 0 0 px2rem(20px);
      font-size: px2rem(28px);
    }
    div {
      color: #666666;
    }
  }

  .SubmitBtn {
    width: px2rem(562px);
    height: px2rem(80px);
    line-height: px2rem(80px);
    border-radius: px2rem(10px);
    color: white;
    background-color: #00be3a;
    font-size: px2rem(36px);
    text-align: center;
    margin: auto;
  }

  .SubmitBtn-bottom {
    text-align: center;
    font-size: px2rem(20px);
    line-height: px2rem(60px);
    color: #666666;
    margin-bottom: px2rem(96px);
    span {
      color: #fc1973;
    }
  }
</style>
