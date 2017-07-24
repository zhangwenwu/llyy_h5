<template>
  <div class="evmpermit">
    <!--排污许可证-->
    <header-top titleName="排污许可证" isIndex="no"></header-top>
    <div class="all-view">
      <div class="_top">
        <div class='_top_bg'>
          <img src="../../assets/img/evmpermit/evmPermit_bg.jpg">
        </div>
        <div class='_bot_bd' id='qw'>
          <div class='HWSubmit'>
            <div class="HWSubmit-title"><span>排污许可证办理</span></div>
              <hr class="HWSubmit-title-hr"/>
              <div class="input-list">
                <div class="list-span">服务镇区：</div>
                <city-bar @getDistrictId='one_diqu'></city-bar>
              </div>
              <div class="input-list">
                <div class="list-span">服务期限：</div>
                <div>30个工作日内</div>
              </div>
              <div class="input-list xkzlx">
                <div class="list-span">许可证类型:</div>
                <div class="list-check" @click="isCheckClick(1)" :class="{'is-check': isCheckIndex == 1}">新办</div>
                <div class="list-check" @click="isCheckClick(2)" :class="{'is-check': isCheckIndex == 2}">换证</div>
                <div class="list-check" @click="isCheckClick(3)" :class="{'is-check': isCheckIndex == 3}">变更</div>
              </div>
              <div class="input-list">
                <div class="list-span">排污申报情况:</div>
                <div class="list-check" @click="isCheckClick_pw(1)" :class="{'is-check': isCheckIndex_pw == 1}">已申报</div>
                <div class="list-check" @click="isCheckClick_pw(2)" :class="{'is-check': isCheckIndex_pw == 2}">未申报</div>
              </div>
              <div class="input-list">
                <div class="list-span">支付分组:</div>
                <div class="list-check" @click="isCheckClick_zf(1)" :class="{'is-check': isCheckIndex_zf == 1}">99预约付</div>
                <div class="list-check" @click="isCheckClick_zf(2)" :class="{'is-check': isCheckIndex_zf == 2}">企业全额付</div>
              </div>
              <div class="input-list">
                <div class="list-span">是否开具发票：</div>
                <div class="yes-no">
                  <div @click="isCheckClickYes(1)" :class="{'is-check': isCheckYes == 1}">是</div>
                  <div @click="isCheckClickYes(2)" :class="{'is-check': isCheckYes == 2}">否</div>
                </div>
              </div>
              <div class="input-list">
                <div class="list-span">发票抬头：</div>
                <div class="invoice-person">
                  <input type="text" ref='invoice'>
                  <div>全额付开票内容：咨询服务费3%</div>
                </div>
              </div>
              <div class="SubmitBtn" @click='evmpermit_but()'>提交</div>
              <div class="SubmitBtn-bottom">已有<span>1866</span>人提交订单</div>
            </div>
        </div>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>
<script>

export default{
  name: 'evmpermit',
  data () {
    return {
      isCheckIndex: 1,
      isCheckIndex_pw: 1,
      isCheckIndex_zf: 1,
      isCheckYes: 2,
      area:'',
    }
  },
  methods: {
    one_diqu:function(e,d,f){    //选择地区 
      this.area = e;
    },
    isCheckClick: function (index) {
      this.isCheckIndex = index
    },
    isCheckClick_pw: function (index) {
      this.isCheckIndex_pw = index
    },
    isCheckClick_zf: function (index) {
      this.isCheckIndex_zf = index
    },
    isCheckClickYes: function (index) {
      this.isCheckYes = index
    },
    evmpermit_but:function(){
      if(this.area == '' ||this.area == '选择地区'){
        alert('请选择服务镇区')
        return false;
      }else if(this.isCheckYes == 1){
        if(this.$refs.invoice.value == ''){
          alert('请输入发票抬头')
          return false;
        }
      }
      let evmpermit = {  
        pwsbqk : this.isCheckIndex_pw,
        zffz : this.isCheckIndex_zf,
        sfkjfp : this.isCheckYes,
        fptt : this.$refs.invoice.value,
        ffzq : this.area,
        xkzlxs : this.isCheckIndex,
      }
      this.$store.dispatch('setEvmpermit',evmpermit)
      this.$router.push({path:'/evmpermitsubmitOrders'})
      
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/scss/cssrem";
  .all-view{
    padding-bottom:px2rem(40px);
  }
  ._top_bg img{
    background-size:100% 100%;
    width: 100%;
  }
  .HWSubmit{
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
    width: px2rem(676px);
    margin: 0 0 px2rem(30px) px2rem(30px);
  }

  .input-list{
    font-size: px2rem(28px);
    line-height: px2rem(60px);
    display: flex;
    margin-bottom: px2rem(20px);
    .list-span {
      width: px2rem(220px);
      text-align: center;
    }
    input{
      width: px2rem(336px);
    }
    .yes-no{
      display: flex;
      div {
        border: px2rem(1px) solid #bfbfbf;
        width: px2rem(110px);
        border-radius: px2rem(4px);
        text-align: center;
        margin-right: px2rem(20px);
      }
    }
    .list-check {
      width:px2rem(160px);
      height:px2rem(75px);
      line-height:px2rem(75px);
      margin-right:px2rem(20px);
      text-align:center;
      border: px2rem(1px) solid #bfbfbf;
      border-radius: px2rem(4px);
      &.others{
        margin-bottom: px2rem(20px);
      }
    }
  }

  .is-check {
    background-color: #00be3a;
    border-color: #00be3a;
    color: white;
  }

  .invoice-person {
    input {
      width: px2rem(500px);
      height: px2rem(60px);
      border: px2rem(1px) solid #bfbfbf;
      border-radius: px2rem(4px);
      font-size:px2rem(28px);
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