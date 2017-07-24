<template>
  <div class="pay">
    <header-top titleName="" isIndex="no"></header-top>
    <div class="all-view">
      <div class='top'>您的排污许可证已办理完成，请及时支付<!-- 尾款 -->！</div>
      <div class='center'>
        <p class='pay_order'>请支付<!-- 尾款 -->,订单号:{{orderid}}</p>
        <p class='pay_pic'>应付金额:￥<span>{{price}}</span></p>
      </div>
      <div class='bg'></div>
      <div class='pay_type'>
          <ul>
            <li class="one">支付方式</li>
            <li><img src="../../assets/img/pay/wx.png">微信支付<img class='right':src="wx_true ? require('../../assets/img/pay/pay_true.png') : require('../../assets/img/pay/pay_false.png')"  @click='toggle_wx()'></li>
            <li><img src="../../assets/img/pay/zfb.png">支付宝支付<img class='right' :src="zfb_true ? require('../../assets/img/pay/pay_true.png') : require('../../assets/img/pay/pay_false.png')"  @click='toggle_zfb()'></li>
            <li><img src="../../assets/img/pay/yl.png">银联支付<img class='right' :src="yl_true ? require('../../assets/img/pay/pay_true.png') : require('../../assets/img/pay/pay_false.png')"  @click='toggle_yl()'></li>
          </ul>
      </div>
      <div class='pay_but' @click='lj_pay()'>立即支付</div>
    </div>
  </div>
</template>

<script>
 import { mapGetters, mapActions } from 'vuex'
export default{
  name: 'pay',
  computed: mapGetters({
      orderids: 'SetOrderId'
    }),
  data () {
    return {
      orderid:'',
      price:'',
      wx_true:false,
      zfb_true:false,
      yl_true:false,
    }
  },
  mounted () {
      this.$nextTick(function () {
        this.orderid = this.orderids.orderId
        this.price = this.orderids.price
      })
    },
  methods: {
    toggle_wx:function(){                 //选择微信支付方式
        this.wx_true = !this.wx_true
        if(this.wx_true){
          this.zfb_true = false
          this.yl_true = false
        }
    },
    toggle_zfb:function(){                //选择支付宝支付方式
        this.zfb_true = !this.zfb_true
        if(this.zfb_true){
          this.wx_true = false
          this.yl_true = false
        }
    },
    toggle_yl:function(){                 //选择银联支付方式
        this.yl_true = !this.yl_true
        if(this.yl_true){
          this.zfb_true = false
          this.wx_true = false
        }
    },
    lj_pay:function(){
      if(this.wx_true){
        /*window.location.href =  ''*/
        this.$axios({   
                  method: 'post',
                  url: 'http://219.135.58.197:8888/llhb/m/pay/wxpay',
                  params:{
                     orderId : this.orderid,
                  },
               })
              .then((response) => {
                  console.log(response)
              })
      }else if(this.zfb_true){
        this.$axios({   
                  method: 'post',
                  url: 'http://219.135.58.197:8888/llhb/m/pay/urlPay',
                  params:{
                     orderId : this.orderid,
                      pay : 'ali'
                  },
               })
              .then((response) => {
                window.location.href = response.data;
                
              })
      }else if(this.yl_true){
        this.$axios({   
                  method: 'post',
                  url: 'http://219.135.58.197:8888/llhb/m/pay/urlPay',
                  params:{
                     orderId : this.orderid,
                      pay : 'union'
                  },
               })
              .then((response) => {
                  console.log(response)
              })
      }else{
        alert('请选择支付方式')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/scss/cssrem";
  .pay{
    background:#fff;
    .all-view{
      padding:0;
    }
  }
  .bg{
    height:px2rem(30px);
    width:100%;
    background:#f0f0f0;
  }
  .top{
    height:px2rem(60px);
    width:100%;
    text-align: center;
    line-height:px2rem(60px);
    background:#fbf9e2;
    color:#f29219;
    font-size:px2rem(28px);
  }
  .center{
    width:100%;
    height:px2rem(174px);
    text-align:center;
    background:#fff;
    padding-top:px2rem(80px);
    .pay_order{
      
      font-size:px2rem(34px);
    }
    .pay_pic{
      font-size:px2rem(30px);
      margin-top:px2rem(20px);
      span{
        font-size:px2rem(50px);
      }
    }
  }
  .pay_type{
    background:#fff;
    ul{
      li{
        height:px2rem(90px);
        border-bottom:1px solid #ccc;
        line-height:px2rem(90px);
        font-size:px2rem(34px);
        padding:0 px2rem(30px);
        img{
          margin-top:px2rem(20px);
          float:left;
          margin-right:px2rem(15px);
        }
        .right{
          float:right;
        }
      }
      .one{
        font-size:px2rem(30px);
      }
    }   
  }
  .pay_but{
    margin:px2rem(270px) auto 0;
    width:px2rem(560px);
    height:px2rem(80px);
    text-align:center;
    line-height:px2rem(80px);
    color:#fff;
    background:#00be3a;
    border-radius: px2rem(4px);
    font-size:px2rem(36px);
  }
  
</style>
