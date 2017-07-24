<template>
  <div class="orderDetail">
    <header-top titleName="订单详情" isIndex="no"></header-top>
    <div class="all-view">
      <div class="detail-div">
          <img :src=imgSrc>
        <div class="detail">
          <div>公司名称：</div>
          <div>所在地区：</div>
          <div>联系人：</div>
          <div>联系方式：</div>
          <div>订单状态：</div>
        </div>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
export default {
  name: 'orderDetail',
  data () {
    return {
      imgSrc: require('../../../assets/img/orderDetail/订单详情-预约付-01.png'),
      order: {
        name: '利丰造纸厂',
        area: '大镇乡',
        linkman: '',
        contact: '',

      }
    }
  },
  mounted () {
    this.$nextTick(function () {
    })
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/css/scss/cssrem";

  .all-view {
    background-color: #f0f0f0;
    padding-top: px2rem(10px);
    .detail-div{
      width: px2rem(710px);
      margin: auto;
      background-color: white;
      img {
        width: px2rem(376px);
        margin: px2rem(40px) px2rem(180px);
      }
    }
  }
</style>
