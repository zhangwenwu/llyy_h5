<template>
  <!-- 危废须知 -->
  <div class="HWknow">
    <header-top titleName="危废处置" isIndex="no"></header-top>
    <div class="all-view">
      <img class="img_1" src="../../assets/img/hazardousWaste/hazardous_waste_detail_1.png"/>
      <div class="hazardous_waste_detail">
        <div class="hw_click" @click="hwClickOpen(1)">
          <p>平台申报</p>
          <p>(点击预览)</p>
        </div>
        <div class="hw_click" @click="hwClickOpen(2)">
          <p>管理计划备案</p>
          <p>(点击预览)</p>
        </div>
      </div>
      <div class="hw_click_img" @click="hwClickClose" v-show="hwClickShow && hwClickIndex === 1">
        <img class="click_img" src="../../assets/img/hazardousWaste/hw_click_01.jpg"/>
      </div>
      <div class="hw_click_img" @click="hwClickClose" v-show="hwClickShow && hwClickIndex === 2">
        <img class="click_img" src="../../assets/img/hazardousWaste/hw_click_02.jpg"/>
      </div>
      <img class="img_2" src="../../assets/img/hazardousWaste/hazardous_waste_detail_2.png"/>
    </div>
    <hw-submit></hw-submit>
    <footer-bar></footer-bar>

  </div>

</template>

<script type="text/javascript">
  import hwSubmit from '../../components/HWSubmit.vue'

  export default {
    name: 'HWknow',
    components: {
      hwSubmit
    },
    data () {
      return {
        hwClickShow: false,
        hwClickIndex: 1,
        clientWidth: 0,
        clientHeight: 0
      }
    },
    mounted () {
      this.$nextTick(function () {
        let target = document.getElementsByClassName('click_img')
        let initialScale = 1
        let currentScale, dx, dy
        target[0].style.webkitTransition = 'all ease 0.05s'
        this.$touch.on('.click_img', 'touchstart', function (ev) {
          ev.preventDefault()
        })
        this.$touch.on('.click_img', 'pinchend', function (ev) {
          currentScale = ev.scale - 1
          currentScale = initialScale + currentScale
          currentScale = currentScale > 5 ? 5 : currentScale // 自己调节可以放大的最大倍数
          currentScale = currentScale < 0.1 ? 0.1 : currentScale // 自己调节可以缩小的最小倍数
          this.style.webkitTransform = 'scale(' + currentScale + ')'
        })
        this.$touch.on('.click_img', 'pinchend', function (ev) {
          initialScale = currentScale
        })
        this.$touch.on('.click_img', 'drag', function (ev) {
          dx = dx || 0
          dy = dy || 0
          let offx = dx + ev.x + 'px'
          let offy = dy + ev.y + 'px'
          let a = currentScale || 1
          this.style.webkitTransform = 'scale(' + a + ') translate3d(' + offx + ',' + offy + ',0)'
        })
        this.$touch.on('.click_img', 'dragend', function (ev) {
          dx += ev.x
          dy += ev.y
        })
      })
    },
    methods: {
      hwClickOpen: function (index) {
        this.hwClickIndex = index
        this.hwClickShow = true
      },
      hwClickClose: function () {
        this.hwClickShow = false
      }
    }
  }
</script>

<style type="text/css" scoped lang="scss">
  @import "../../assets/css/scss/cssrem";

  .all-view {
    padding: px2rem(70px) 0 px2rem(126px) 0;
    .img_1 {
      width: 100%;
    }
    .img_2 {
      width: 80%;
      margin-left: 10%;
    }
  }

  .hazardous_waste_detail {
    display: flex;
    justify-content: space-around;
    padding: px2rem(80px) 0;
    .hw_click {
      height: px2rem(100px);
      width: px2rem(240px);
      border: 1px solid #74b909;
      border-radius: 4px;
      p {
        text-align: center;
        margin: px2rem(10px) 0 0 0;
        &:nth-child(1) {
          color: #74b909;
          font-size: px2rem(32px)
        }
        &:nth-child(2) {
          color: #74b909;
          font-size: px2rem(20px);
        }
      }
    }
  }

  .hw_click_img {
    position: fixed;
    bottom: 0;
    background-color: black;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    img {
      width: 80%;
      margin-left: 10%;
      margin-top: 50%;
    }
  }
</style>
