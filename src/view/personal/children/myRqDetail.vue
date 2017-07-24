<template>
  <div class="myRqDetail">
    <header-top titleName="需求详情" isIndex="no"></header-top>
    <div class="all-view">
      <div class="details">
        <div class="details-title">
          <p>{{detail.remarks}}</p>
          <p>{{detail.ctime}}</p>
        </div>
        <div class="details-div details-state" :style="{color:detail.trade_status==='已解决'? '#f29219':'#00be3a'}">{{detail.trade_status}}</div>
        <div class="details-div">需求编号：<span>{{detail.id}}</span></div>
        <div class="details-div">公司名称：<span>{{detail.company_name}}</span></div>
        <div class="details-div">所在地区：<span>{{detail.city_name}}</span></div>
        <div class="details-div">联系人：<span>{{detail.name}}</span></div>
        <div class="details-div">联系方式：<span>{{detail.phone}}</span></div>
        <div class="details-div">项目预计完成时间：<span>无</span></div>
        <div class="details-div">需求描述：<span>{{detail.requirement_describe}}</span></div>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
export default {
  name: 'myRqDetail',
  data () {
    return {
      detail: {}
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.detail = JSON.parse(this.$route.params.self)
    })
  },
  methods: {}
}
</script>

<style scoped lang="scss">
 @import "../../../assets/css/scss/cssrem";

 .all-view {
   background-color: #f0f0f0;
   padding-top: px2rem(15px);
 }

  .details {
    width: px2rem(710px);
    min-height: px2rem(1060px);
    margin: auto;
    background-color: white;
    padding-top: px2rem(60px);
    .details-title{
      text-align: center;
      font-size: px2rem(34px);
      color: black;
      p {
        margin: 0 auto;
        line-height: px2rem(60px);
        &:last-child {
          border-top: 1px solid #666666;
          width: px2rem(170px);
          font-size: px2rem(24px);
        }
      }
    }
    .details-div {
      width: px2rem(634px);
      margin: px2rem(15px) auto;
      font-size: px2rem(28px);
      color: #666666;
      span {
        color: black;
      }
    }
    .details-state {
      text-align: right;
      font-size: px2rem(30px);
    }
  }
</style>
