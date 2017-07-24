<template>
  <div class="IMSystem">
    <header-top titleName="咨询应答" isIndex="no"></header-top>
    <div class="all-view">
      <router-link to="IMWindow" v-for="item in IMList">
        <div class="IM-list">
          <img src="../../../assets/img/personal/pensonal_top.jpg"/>
          <div class="middle-div">
            <div class="user-name">{{item.userName}}</div>
            <div class="new-msg">{{item.newMsg}}</div>
          </div>
          <div class="right-div">
            <div class="last-time">{{item.lastTime}}</div>
            <div class="unread">{{item.unread}}</div>
          </div>
        </div>
      </router-link>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
export default{
  name: 'IMSystem',
  data () {
    return {
      IMList: [
        {
//          heardImg: '',
          userName: '思思追忆',
          newMsg: '喂喂喂，我的排污许可证好了没？',
          lastTime: '10:53',
          unread: 22
        },
        {
//          heardImg: '',
          userName: '思思追忆',
          newMsg: '喂喂喂，我的排污许可证好了没？',
          lastTime: '10:53',
          unread: 22
        },
        {
//          heardImg: '',
          userName: '思思追忆',
          newMsg: '喂喂喂，我的排污许可证好了没？',
          lastTime: '2017-10-12',
          unread: 22
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  @import "../../../assets/css/scss/cssrem";

  .IM-list {
    display: flex;
    height: px2rem(130px);
    border-bottom: px2rem(2px) solid #f0f0f0;
    img {
      width: px2rem(78px);
      height: px2rem(78px);
      border-radius: 50%;
      margin: px2rem(20px);
    }
    .middle-div {
      margin-top: px2rem(20px);
      width: 65%;
      .user-name {
        font-size: px2rem(32px);
        color: black;
      }
      .new-msg {
        font-size: px2rem(28px);
        color: #666666;
      }
    }
    .right-div {
      margin-top: px2rem(32px);
      font-size: px2rem(24px);
      color: #999999;
      width: 18%;
      text-align: center;
      .unread {
        margin: px2rem(12px) auto;
        width: px2rem(54px);
        border-radius: px2rem(15px);
        background-color: #ff0000;
        color: white;
        height: px2rem(30px);
        line-height: px2rem(30px);
      }
    }
  }
</style>
