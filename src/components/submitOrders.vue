<template>
	<div class="submitOrders">
	<header-top titleName="提交订单" isIndex="yes"></header-top>
	 <div class="all-view">
	 <div class="spacing">
	 <div class="message-input">
	 	<div class="list-company">公司名称:</div>
	 	<input type="text" name="">
	 </div>
	 <div class="message-input">
	 	<div class="list-company">联系人:</div>
	 	<input type="text" name="">
	 </div>
	 <div class="message-input">
	 	<div class="list-company">联系电话:</div>
	 	<input type="text" name="">
	 </div>
	 <div class="message-input">
	 	<div class="list-company">验证码:</div>
	 	<input type="text" name="" class="lines">
	 	<p class="authCode">获取验证码</p>
	 </div>
	 <div class="message-check">
	 	<div class="pitchOn"><input type="checkbox" name="" class="state"></div>
	 	<p class="agreement">我已阅读并接受<b>《优蚁用户服务协议》</b></p>
	 </div>
	 <div class="submitBtns">提交</div>
	 </div>
	 </div>
	  <footer-bar></footer-bar>
	</div>
</template>

<script>
  export default {
    name: 'submitOrders',
    data () {
      return {}
    }
  }
</script>

<style lang="scss">
	@import "../assets/css/scss/cssrem";
	.spacing{
		margin-top:px2rem(172px);
	}
	.message-input{
		display: flex;
		font-size: px2rem(32px);
		height:px2rem(80px);
	}
	.list-company{
		height:px2rem(80px);
		line-height:px2rem(80px);
		width:px2rem(230px);
		text-align:right;
	}
	.message-input input{
		width:px2rem(440px);
		border:none;
		border-bottom:px2rem(1px) solid #b5b5b5;
		margin-left:px2rem(12px);
	}
	.message-input .lines{
		width:px2rem(250px);
		border:none;
		border-bottom:px2rem(1px) solid #b5b5b5;
		margin-left:px2rem(12px);
	}
	.message-input .authCode{
		width:px2rem(168px);
		height:px2rem(64px);
		border-radius:px2rem(10px);
		background-color:#ccc;
		font-size: px2rem(28px);
		color:#fff;
		text-align:center;
		line-height:px2rem(64px);
		margin-top:px2rem(16px);
		margin-left:px2rem(20px);
	}
	.message-check{
		text-align:right;
		display: flex;
		margin-top:px2rem(26px);
	}
	.message-check .pitchOn{
		width:px2rem(150px);
		text-align:right;
		height:px2rem(24px);
	}
	.message-check .state{
		width:px2rem(22px);
		height:px2rem(22px);

	}
	.message-check .agreement{
		margin-top:0;
		font-size: px2rem(24px);
		margin-left:px2rem(6px);
	}
	.message-check .agreement b{
		font-weight: normal;
		color:#5ec51e;
	}
	.submitBtns{
	    width: px2rem(562px);
	    height: px2rem(80px);
	    line-height: px2rem(80px);
	    border-radius: px2rem(10px);
	    color: white;
	    background-color: #ccc;
	    font-size: px2rem(36px);
	    text-align: center;
	    margin: auto;
	    margin-top:px2rem(60px);
	}
</style>