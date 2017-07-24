<template>
  <div class="wasteDisposal">
    <header-top titleName="提交订单" isIndex="no"></header-top>
    <div class="all-view">
      <div class="flowPath">
        <img src="../../assets/img/wasteDisposal/flowPath.png">
      </div>
      <hw-submit></hw-submit>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import hwSubmit from '../../components/HWSubmit.vue'
  export default {
    name: 'wasteDisposal',
    data () {
      return {}
    },
    components: {
      hwSubmit
    }
  }
</script>

<style lang="scss">
  @import "../../assets/css/scss/cssrem";

  .flowPath {
    height: px2rem(330px);
    img {
      width: 100%;
      height: px2rem(330px);
    }
  }
</style>
