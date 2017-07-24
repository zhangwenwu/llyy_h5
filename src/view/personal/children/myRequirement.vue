<template>
  <div class="myRequirement">
    <header-top titleName="需求列表" isIndex="no"></header-top>
    <div class="all-view" :style="{'min-height': viewHeight+'px','padding-top':sort==='company'?0:0.25+'rem'}">
      <div class="youyi-tabs" v-if="sort==='company'">
        <div class="youyi-tab" v-for="(item,index) in tabsList" @click="tabClick(index)" :class="{'youyi-tab-active':tabIndex===index}">
          {{item.tabName}}
        </div>
      </div>
      <div class="tab-view" :class="{'tab-view-company':sort==='company'}">
        <div v-for="item in myRequirement.list" class="rq-list">
          <div class="list-div">
            <div>{{item.columns.remarks}}</div>
            <div>{{item.columns.ctime}}</div>
            <div :style="{color:item.columns.trade_status==='已解决'? '#f29219':'#00be3a'}">{{item.columns.trade_status}}</div>
          </div>
          <div class="list-div">地区：{{item.columns.trade_status}}</div>
          <div class="list-div">企业名称：{{item.columns.city_name}}</div>
          <div class="list-div">需求内容：{{item.columns.requirement_describe.substring(0,30)+'...'}}</div>
          <div class="list-div"><router-link :to="{ name: 'myRqDetail', params: { self: JSON.stringify(item.columns)}}">查看详情</router-link></div>
        </div>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'myRequirement',
  computed: {
    ...mapGetters({
      myRequirement: 'PersonMyRequirement'
    })
  },
  data () {
    return {
      sort: this.$route.params.sort,
      tabIndex: 2,
      tabsList: [
        {tabName: '优质推荐'},
        {tabName: '我已购买'},
        {tabName: '我的需求'}
      ],
      viewHeight: 0, // 获取窗口高度
      pageNum: 1 // 当前页面
    }
  },
  mounted () {
    this.$nextTick(function () {
      let userId = JSON.parse(this.$cookie.getCookie('user')).userId
      this.viewHeight = window.screen.height * document.querySelector('html').getAttribute('data-dpr') - document.getElementsByClassName('header-top')[0].clientHeight - document.getElementsByClassName('footer-bar')[0].clientHeight
      this.$store.dispatch('getMyRequirement', {
        type: 'myRequirement',
        userId: userId,
        pageNumber: this.pageNum
      })
    })
  },
  methods: {
    tabClick: function (index) {
      this.tabIndex = index
      let userId = JSON.parse(this.$cookie.getCookie('user')).userId
      switch (index) {
        case 0:
          this.$store.dispatch('getMyRequirement', {
            type: 'recomendRequirement',
            userId: userId,
            pageNumber: this.pageNum
          })
          break
        case 1:
          this.$store.dispatch('getMyRequirement', {
            type: 'paidRequirement',
            userId: userId,
            pageNumber: this.pageNum
          })
          break
        case 2:
          this.$store.dispatch('getMyRequirement', {
            type: 'myRequirement',
            userId: userId,
            pageNumber: this.pageNum
          })
          break
      }
    }
  }
}

</script>

<style scoped lang="scss">
  @import "../../../assets/css/scss/cssrem";

  .youyi-tabs {
    position: fixed;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    height: px2rem(80px);
    border-bottom: px2rem(30px) solid #f0f0f0;
    .youyi-tab {
      text-align: center;
      color: #333333;
      line-height: px2rem(80px);
      width: 33.3%;
      font-size: px2rem(30px);
      &.youyi-tab-active {
        border-bottom: px2rem(2px) solid #00be3a;
        color: #00be3a;
      }
    }
  }

  .tab-view-company {
    padding-top: px2rem(110px);
  }

  .all-view {
    background-color: #f0f0f0;
  }

  .rq-list{
    width: px2rem(710px);
    height: px2rem(360px);
    margin: 0 auto px2rem(20px) auto;
    background-color: white;
    padding-top: px2rem(20px);
    .list-div{
      font-size: px2rem(28px);
      color: #666666;
      margin: px2rem(15px) auto;
      width: px2rem(630px);
      text-align: left;
      &:first-child {
        display: flex;
        justify-content: space-around;
        margin-bottom: px2rem(30px);
        div{
          width: 25%;
          line-height: px2rem(48px);
          &:nth-child(1) {
            width: 50%;
            color: black;
            font-size: px2rem(34px);
            text-align: left;
          }
          &:nth-child(3) {
            font-size: px2rem(30px);
            text-align: right;
          }
        }
      }
      &:nth-child(4) {
        height: px2rem(80px);
      }
      &:last-child {
        text-align: right;
    }
    }
  }
</style>
