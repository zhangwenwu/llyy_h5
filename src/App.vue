<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  #app {
    font-family: Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", STXihei, "Microsoft YaHei", SimHei, "WenQuanYi Micro Hei";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
  }
  * {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  list-style: none;
}
body{overflow-x:hidden;}
h1,h2,h3,h4,h5,h6,ul,li,dl,dt,dd,p,img,input,button,textarea,select{margin:0; padding:0; list-style:none;}

  a {
    color: #333333;
    text-decoration:none;  /* 重置链接a标签 */
    &:active, &:hover {
      text-decoration:none
    }   /* 重置链接a标签的鼠标滑动效果 */
  }
</style>
