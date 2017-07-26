<template>
  <div class="personal">
    <header-top titleName="个人中心" isIndex="no"></header-top>
    <div class="all-view" :style="{height: viewHeight+'px'}">
      <div class="personal-top">
        <img :src="headImg"/>
        <p>{{imgAndName.login_name}}</p>
      </div>
      <div class="personal-list">
        <router-link to="/myRequirement/personage">
          <div>
            <img class="icon-pic" src="../../assets/img/personal/my_requirement.png"/>
            <p>我的需求</p>
            <img class="icon-pic-right" src="../../assets/img/personal/left_click.png"/>
          </div>
        </router-link>
        <router-link to="/MyOrder">
          <div>
            <img class="icon-pic" src="../../assets/img/personal/my_order.png"/>
            <p>我的订单</p>
            <img class="icon-pic-right" src="../../assets/img/personal/left_click.png"/>
          </div>
        </router-link>
      </div>
      <div class="personal-list">
        <router-link to="/myRequirement/company">
          <div>
            <img class="icon-pic" src="../../assets/img/personal/requirement_manage.png"/>
            <p>需求管理</p>
            <img class="icon-pic-right" src="../../assets/img/personal/left_click.png"/>
          </div>
        </router-link>
        <a href="http://p.qiao.baidu.com/cps/chat?siteId=9759310&userId=21364156">
          <div>
            <img class="icon-pic" src="../../assets/img/personal/company_consult.png"/>
            <p>咨询应答</p>
            <img class="icon-pic-right" src="../../assets/img/personal/left_click.png"/>
          </div>
        </a>
      </div>
    </div>
    <footer-bar></footer-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'personal',
    computed: {
      ...mapGetters({
        imgAndName: 'PersonImgAndName'
      })
    },
    data () {
      return {
        viewHeight: 0, // 获取窗口高度
        peopleSort: this.$route.params.sort,
        headImg: require('../../assets/img/consult/tab_pic.png'),
        userId: ''
      }
    },
    mounted () {
      /*this.$nextTick(function () {
        this.viewHeight = document.querySelector('html').getAttribute('data-dpr') * window.screen.height - document.getElementsByClassName('header-top')[0].clientHeight - document.getElementsByClassName('footer-bar')[0].clientHeight
        let userId = JSON.parse(this.$cookie.getCookie('user')).userId
        this.$store.dispatch('getImgAndName', userId)
        if (this.imgAndName.head_img) {
          this.headImg = this.imgAndName.head_img
        } else {
          this.headImg = require('../../assets/img/personal/pensonal_top.jpg')
        }
      })*/
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/scss/cssrem";

  .all-view {
    background-color: #f0f0f0;
  }

  .personal-top {
    height: px2rem(316px);
    background-color: #00b13a;
    text-align: center;
    img {
      margin-top: px2rem(20px);
      height: px2rem(186px);
      width: px2rem(186px);
      border-radius: 50%;
    }
    p {
      font-size: px2rem(32px);
      color: #ffffff;
      margin-top: px2rem(30px);
    }
  }

  .personal-list {
    border-top: px2rem(20px) solid #e6e6e6;
    div {
      height: px2rem(88px);
      border-bottom: px2rem(2px) solid #e6e6e6;
      background-color: #ffffff;
      display: flex;
      justify-content: space-between;
      img {
        margin: px2rem(20px);
      }
      p {
        margin: 0;
        width: px2rem(640px);
        text-align: left;
        line-height: px2rem(88px);
        font-size: px2rem(32px);
      }
    }
  }

  .icon-pic {
    width: px2rem(44px);
    height: px2rem(44px);
  }

  .icon-pic-right {
    margin-top: px2rem(28px) !important;
    width: px2rem(32px);
    height: px2rem(32px);
    opacity: 0.7;
  }
</style>
