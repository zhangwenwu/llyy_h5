<template>
	<div class='login'>
		<div class='login_top'>
			<router-link to="/"><img src="../../assets/img/login/logo.png"></router-link>
		</div>
		<div class='login_form'>
			<div class="user_name">
	 			<img src="../../assets/img/login/login_l.png">
	 			<input type="text" id="login_name" placeholder="请输入手机号/邮箱" ref='name'>
	 		</div>
	 		<div class="login_password">
	 			<img src="../../assets/img/login/login_r.png">
	 			<input type="password" id="login_password" placeholder="请输入密码" ref='password'>
	 		</div>
	 		<div class="btnbox"><button type="button" @click='login()'>登录</button></div>
	 		<div class="other">
	 		<router-link to="/password">
	 		忘记密码
	 		</router-link>
	 		<router-link to="/Register" class="forget_password">
	 		注册账号
	 		</router-link>
	 		</div>
	 		<router-link to="/Login_dynamic">
	 		<div class='dt_mi'><a>动态密码登录</a></div>
	 		</router-link>
		</div>
	</div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex'
	export default{
	  name: 'login',
	  data () {
	    return {

	    }
	  },
	  methods: {
	    login:function(){                 	//登录
	        if(this.$refs.name.value == ''){
	        	alert('请输入登录名');
	        }else if(this.$refs.password.value == ''){
	        	alert('请输入密码');
	        }else{
	        	 this.$router.push({path:'/personal/personal'})
	        	 /*this.$axios({
		            method: 'post',
		            url: 'http://219.135.58.197:8888/llhb/m/login',
		            params:{
	                  username: this.$refs.name.value,
	                  password: this.$refs.password.value,
	                },
		         })
		        .then((response) => {
		        	if(response.data.logErr == 'ok'){
		        		let usertype = {
		        			userId : response.data.userId,
		        			role : response.data.role
		        		}
		        		this.$cookie.setCookie('user',JSON.stringify(usertype),'21600')
		            	this.$router.push({path:'/personal/'+response.data.role})
		        	}else{

		        		alert(response.data.logErr);
		        	}
		        })*/
	        }
	    }
	  }
	}
</script>
<style scoped lang="scss">
  @import "../../assets/css/scss/cssrem";
  .login_top{
  	width:px2rem(447px);
  	margin:px2rem(150px) auto;
  	img{
  		width: 100%;
  	}
  }
  .other{
  	width: px2rem(560px);
  	margin: px2rem(20px) auto px2rem(90px);
  	a{
  		float: left;
  		font-size: px2rem(28px);
  	}
  	.forget_password{
  		float: right;
  		color:#00be3a;
  	}
  }
  .dt_mi{
  	width: px2rem(560px);
  	margin: 0 auto;
  	text-align: center;
  	a{
  		font-size: px2rem(28px);
  		color:#00be3a;
  		text-decoration: underline;
  	}
  }
  .user_name,.login_password {
		width: px2rem(560px);
		margin: 0 auto;
		position: relative;
		border-bottom: 1px solid #aaa;
		padding: px2rem(12px) 0;
	}
	.user_name img,.login_password img {
		position: absolute;
		top: px2rem(38px);
		width: px2rem(30px);
		height:px2rem(30px);
	}
	.user_name input,.login_password input {
		width: px2rem(560px);
		height: px2rem(80px);
		font-size: px2rem(30px);
		border: none;
		margin-left: 10%;
	}
	.user_name input:focus,.login_password input:focus {
		outline:none;
		color: #333;
	}
	.btnbox {
		width: px2rem(560px);
		text-align: center;
		margin: px2rem(90px) auto 0;
	}
	.btnbox button {
		width: px2rem(560px);
		height: px2rem(80px);
		border: none;
		background: #ccc;
		border-radius: px2rem(4px);
		color: #fff;
		font-size: px2rem(36px);
	}
</style>
