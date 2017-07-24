<template>
  <div class="index">
    <header-top titleName="优蚁环保网" isIndex="yes"></header-top>
    <div class="all-view">
      <div class="top-pic">
        <img src="../../assets/img/index/index_top.png"/>
      </div>
      <div class="middle-view">
        <div class="requirement-service-title"><span>环保服务</span></div>
        <div class="service-view">
          <div class="washing-out">
            <img src="../../assets/img/index/washing-out.png"/>
            <p>排污许可证</p>
            <div class="btn-group">
              <router-link to="/evmpermitOrder">
                <div>提交订单</div>
              </router-link>

              <router-link to="/evmpermit">
                <div>申办须知</div>
              </router-link>
            </div>
          </div>
          <div class="hazardous-waste">
            <img src="../../assets/img/index/hazardous-waste.png">
            <p>危废处理</p>
            <div class="btn-group">
              <router-link to="/wasteDisposal">
                <div>提交订单</div>
              </router-link>

              <router-link to="/HWknow">
                <div>申办须知</div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-view">
        <div class="requirement-service-title"><span>环保需求</span></div>
        <div class="requirement-view">
          <router-link :to="{name: 'construction',params: {type: item.tabClass}}" v-for="item in requirementTabs" class="requirement-tabs">
            {{item.tabName}}
          </router-link>
        </div>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>

</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        requirementTabs: [
          {tabClass: 'tab-assess', tabName: '环评'},
          {tabClass: 'tab-monitor', tabName: '环境监测'},
          {tabClass: 'tab-project', tabName: '环保工程'},
          {tabClass: 'tab-acceptance-check', tabName: '项目验收'},
          {tabClass: 'tab-contingency-plan', tabName: '应急预案'},
          {tabClass: 'tab-production', tabName: '清洁生产'},
          {tabClass: 'tab-authentication', tabName: 'ISO14001认证'},
          {tabClass: 'tab-equipment', tabName: '环保设备'},
          {tabClass: 'tab-accessories', tabName: '环保配件'},
          {tabClass: 'tab-medicament', tabName: '材料药剂'},
          {tabClass: 'tab-others', tabName: '其他'}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../../assets/css/scss/cssrem";

  $border-color: #dbdbdb;
  $tab-img: url('../../assets/img/index/tab-assess.png') url('../../assets/img/index/tab-monitor.png') url('../../assets/img/index/tab-project.png') url('../../assets/img/index/tab-acceptance-check.png') url('../../assets/img/index/tab-contingency-plan.png') url('../../assets/img/index/tab-production.png') url('../../assets/img/index/tab-authentication.png') url('../../assets/img/index/tab-equipment.png') url('../../assets/img/index/tab-accessories.png') url('../../assets/img/index/tab-medicament.png') url('../../assets/img/index/tab-others.png');

  .top-pic {
    height: px2rem(208px);
    img {
      width: 100%;
      height: px2rem(208px);
    }
  }

  .requirement-service-title {
    height: px2rem(87px);
    line-height: px2rem(87px);
    border-bottom: 1px solid $border-color;
    span {
      padding-left: px2rem(20px);
      margin-left: px2rem(20px);
      border-left: px2rem(4px) solid #666666;
    }
  }

  .service-view {
    height: px2rem(289px);
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    -webkit-justify-content: space-around;
    border-bottom: px2rem(20px) solid $border-color;
    .washing-out, .hazardous-waste {
      width: 50%;
      text-align: center;
      img {
        height: px2rem(80px);
        margin-top: px2rem(45px);
      }
    }
    .washing-out {
      border-right: 1px solid $border-color;
    }
  }

  @for $i from 1 through 3 {
    [data-dpr="#{$i}"] .service-view p {
      $px: 13px*$i;
      font-size: $px;
    }
  }

  .btn-group {
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    -webkit-justify-content: space-around;
    margin-top: px2rem(30px);
    a {
      width: px2rem(150px);
      height: px2rem(40px);
      line-height: px2rem(40px);
      border-radius: px2rem(20px);
      &:nth-child(1) {
        color: #00be3a;
        border: 1px solid #00be3a;
      }
      &:nth-child(2) {
        color: #ff8b12;
        border: 1px solid #ff8b12;
      }
    }
  }

  .requirement-view{
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    .requirement-tabs{
      width: 25%;
      text-align: center;
      height: px2rem(160px);
      line-height: px2rem(240px);
    }
  }


  @for $i from 1 through length($tab-img) {
    .requirement-tabs:nth-child(#{$i}){
      background: nth($tab-img,$i) center px2rem(36px) no-repeat;
      background-size: px2rem(48px);
    }
  }

  @for $i from 1 through 3 {
    [data-dpr="#{$i}"] {
      .requirement-service-title {
        $px: $i*16px;
        font-size: $px;
      }
      .service-view p {
        $px: 13px*$i;
        font-size: $px;
      }
      .btn-group div {
        $px: 12px*$i;
        font-size: $px;
      }
    }
  }
</style>
