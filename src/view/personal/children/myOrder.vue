<template>
  <div class="myOrder">
    <header-top titleName="我的订单" isIndex="no"></header-top>
    <div class="all-view">
      <div class="order-bg" :style="{'min-height': viewHeight+'px'}">
        <div v-for="item in PersonMyOrder.orderInfo.list" class="orderList">
          <div class="list-row">
            <div class="orderType">{{item.order_type === 'DP'?'排污许可证':'危废代办'}}</div>
            <div class="orderDate">{{item.create_date}}</div>
          </div>
          <div class="list-row">
            <div>订单编号：{{item.pay_uuid}}</div>
            <div>申报情况：{{getOrderStatus(item.order_status)}}</div>
          </div>
          <div class="list-row">
            <div>预付款：{{item.orderPrice}}</div>
            <div>是否开具发票：否</div>
          </div>
          <div class="list-row">
            <div>{{item.businessDetails}}—<span class="click-btn">业务详情</span></div>
            <div>{{item.orderDetails}}—<span class="click-btn">订单详情</span></div>
          </div>
          <div class="list-row">
            <button class="refund">申请退款</button>
            <button class="final-payment">支付尾款</button>
            <button class="evaluate">评价</button>
          </div>
        </div>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'myOrder',
  computed: {
    ...mapGetters({
      PersonMyOrder: 'PersonMyOrder'
    })
  },
  data () {
    return {
      viewHeight: 0 // 获取窗口高度
    }
  },
  mounted () {
    this.$nextTick(function () {
      let userId = JSON.parse(this.$cookie.getCookie('user')).userId
      this.$store.dispatch('getOrder', {
        userId: userId,
        pageNumber: 1
      })
      this.viewHeight = document.querySelector('html').getAttribute('data-dpr') * window.screen.height - document.getElementsByClassName('header-top')[0].clientHeight - document.getElementsByClassName('footer-bar')[0].clientHeight
    })
  },
  methods: {
    getOrderStatus: (num) => {
      switch (num) {
        case 1 :
          return '已下单'
        case 2 :
          return '已付款'
        case 3 :
          return '订单信息核对'
        case 4 :
          return '排污申报资料收集'
        case 5 :
          return '提交申报资料'
        case 6 :
          return '申报成功'
        case 7 :
          return '办证资料收集'
        case 8 :
          return '提交办证资料'
        case 9 :
          return '环保部门出证'
        case 10 :
          return '支付尾款'
        case 11 :
          return '许可证已寄出'
        case 12 :
          return '确认取得许可证'
        case 13 :
          return '评价订单'
        case 77 :
          return '已取消'
        case 88 :
          return '退款审核中'
        case 99 :
          return '已退款'
        case 100 :
          return '退款失败'
        case 101 :
          return '取消退款'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/css/scss/cssrem";
  .order-bg {
    width: 100%;
    background-color: #f0f0f0;
    padding: px2rem(2px) 0;
    .orderList {
      height: px2rem(375px);
      width: px2rem(710px);
      margin: px2rem(30px) auto;
      background-color: white;
      padding-top: px2rem(40px);
      .list-row {
        width: px2rem(630px);
        margin: px2rem(20px) auto;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        color: #666666;
        font-size: px2rem(28px);
        &:first-child {
          margin-bottom: px2rem(40px);
        }
        .orderType {
          font-size: px2rem(34px);
          color: #333333;
        }
        .click-btn {
          color: #00be3a;
        }
        &:last-child {
          justify-content: flex-end;
        }
        button {
          height: px2rem(50px);
          width: px2rem(140px);
          background: none;
          font-size: px2rem(24px);
          margin-left: px2rem(20px);
          &.refund {
            border: px2rem(2px) solid #f29219;
            color: #f29219;
          }
          &.final-payment {
            border: px2rem(2px) solid #00be3a;
            color: #00be3a;
          }
          &.evaluate {
            border: px2rem(2px) solid #00be3a;
            color: #00be3a;
          }
        }
      }
    }
  }
</style>
