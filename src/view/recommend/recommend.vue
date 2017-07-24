<template>
  <div class="recommend">
    <!--优质推荐-->
    <header-top titleName="会员入驻" isIndex="no"></header-top>
    <div class="all-view">
    	 <div class="members-in">
    		<img src="../../assets/img/recommend/members.jpg">
    	 </div>
    	<div class="joins">
    		<input type="" name="" class="company-names" placeholder="请输入您的公司名">
    		<p class="region">
    			<select type="" name="" class="city-names" placeholder="北京"></select>
    			<select type="" name="" class="area-names" placeholder="市辖区"></select>
    		</p>
    		<input type="" name="" class="company-names" placeholder="请填写联系人名称">
    		<input type="" name="" class="company-names" placeholder="请填写联系电话">
    		<div class="join-now">立即加入</div>
    		<p class="calls">或拨打<b>0769-2166 9939</b></p>
    	</div>
    </div>
    <footer-bar></footer-bar>
  </div>

</template>

<style lang="scss">
  @import "../../assets/css/scss/cssrem";
  .members-in img{
  	width:100%;
  }
  .joins{
  	width:px2rem(690px);
  	margin:0 auto;
    margin-bottom:px2rem(60px);
  }
  .joins .company-names{
  	width:px2rem(672px);
  	height:px2rem(79px);
  	border-radius:px2rem(4px);
  	border:0;
  	border:1px solid #d2d2d2;
  	font-size:px2rem(30px);
  	padding-left:px2rem(17px);
  	margin-bottom:px2rem(28px);
  	 color:#999; 
  }
  .joins .region{
  	display:flex;
  	margin-bottom:px2rem(28px);
  }
  .joins .region select{
  	width:px2rem(326px);
  	height:px2rem(79px);
  	border:0;
  	border:1px solid #d2d2d2;
  }
  .joins .region .city-names{
  	margin-right:px2rem(38px);
  }
  .joins .join-now{
  	width:px2rem(690px);
  	height:px2rem(80px);
  	border-radius:px2rem(10px);
  	background:#00be3a;
  	line-height:px2rem(80px);
  	font-size:px2rem(30px);
  	color:#fffdfd;
  	text-align:center;
  }
  .calls{
  	width:px2rem(690px);
  	text-align:center;
  	font-size:px2rem(30px);
  	margin-top:px2rem(40px);
  }
  .calls b{
  	color:#ff8b12;
  }
</style>