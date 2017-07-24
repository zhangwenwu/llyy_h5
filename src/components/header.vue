<template>
  <div class="header-top">
    <div class="left-div">
      <div class="QR-code" v-show="isChange==='yes'">
        <img src="../assets/img/header/QR_code.png"/>
      </div>
      <div class="go-back" v-show="isChange==='no'" @click="goBack">
        <img src="../assets/img/header/go_back.png">
      </div>
      <div class="go-index" v-show="isChange==='no'" @click="goIndex">
        首页
      </div>
    </div>
    <div class="title">
      <p>{{titleName}}</p>
      <msg-window message="确定要离开此页吗"
                  btnLeft="离开此页"
                  btnRight="留在此页"
                  v-show="msgWindow"
                  @btnClick="goOthers"
      ></msg-window>
    </div>
    <div class="right-div">
      <div class="telephone" v-show="isChange==='yes'">
        <a :href="setTel"><img src="../assets/img/header/telephone.png"/></a>
      </div>
      <div class="mine" @click="goPersonal">
        <img src="../assets/img/header/mine.png"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'top-header',
    props: ['titleName', 'isIndex', 'isIssue'],
    data () {
      return {
        isChange: this.isIndex,
        msgWindow: false,
        chooseNum: 0,
        setTel:"tel:"
      }
    },
    methods: {
      goBack: function () {
        if (this.isIssue === 'true') {
          this.msgWindow = true
          this.chooseNum = 1
          return
        }
        this.$router.go(-1)
      },
      goIndex: function () {
        if (this.isIssue === 'true') {
          this.msgWindow = true
          this.chooseNum = 2
          return
        }
        this.$router.push('/')
      },
      goPersonal: function () {
        if (this.isIssue === 'true') {
          this.msgWindow = true
          this.chooseNum = 3
          return
        }
        this.$router.push({path:'/login'})
        //this.$router.push({name: 'Personal', params: {sort: 'personage'}})
      },
      goOthers: function (b) {
        if (b === true) {
          switch (this.chooseNum) {
            case 1: this.$router.go(-1)
              break
            case 2: this.$router.push('/')
              break
            case 3: this.$router.push({name: 'Personal', params: {sort: 'company'}})
          }
        } else {
          this.msgWindow = false
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/scss/cssrem.scss";

  .header-top {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #00b13a;
    height: px2rem(88px);
    display: flex;
    z-index:999;
  }

  .left-div, .title, .right-div {
    width: 33.3%;
    display: flex;
  }

  .QR-code, .go-back, .telephone, .mine {
    img {
      height: px2rem(40px);
    }
  }

  .QR-code, .go-back {
    height: px2rem(40px);
    width: px2rem(40px);
    margin: px2rem(24px) 0 0 px2rem(29px);
  }

  .go-index {
    @extend .QR-code;
    width: px2rem(98px);
  }

  .title {
    color: #ffffff;
    line-height: px2rem(88px);
    p {
      width: 100%;
      margin: 0;
      text-align: center;
    }
  }

  .right-div {
    justify-content: flex-end;
    .telephone, .mine {
      margin: px2rem(24px) px2rem(30px) 0 0;
    }
  }

  @for $i from 1 through 3 {
    [data-dpr="#{$i}"] {
      $px: $i*1px;
      .title {
        font-size: 18*$px;
      }
      .go-index {
        font-size: 16*$px;
        color: white;
      }
    }
  }
</style>
