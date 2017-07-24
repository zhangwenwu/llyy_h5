<template>
	<div class='login_dynamic'>
		  <div class="header-top">
		    <div class="left-div">
		      <div class="go-back" @click="goBack">
		        <img src="../../assets/img/header/go_back_b.png">
		      </div>
		    </div>
		    <div class="title"><p>用户注册</p></div>
		  </div>
		  <div class='xqlb_tc xqlb_tc2' @click='close_yz()' v-show='yz_show'>
		      <div class="msg-window">
		          <div class="message" @click.stop='yztc()'>
		            <p>请输入图形验证码</p>
		            <p><input type="text" ref='yzms'><img :src='yzms' @click='toggle_yzm()'></p>
		          </div>
		          <div class="msg-btn">
		            <div class="msg-btn-left" @click.stop='get_yzms()'>确定</div>
		            <div class="msg-btn-right" @click='close_yzms()'>取消</div>
		          </div>
		        </div>
		    </div>
		<div class='login_top'>
			<router-link to="/"><img src="../../assets/img/login/logo.png"></router-link>
		</div>
		<div class='login_form'>
			<div class="user_name">
	 			<img src="../../assets/img/login/login_l.png">
	 			<input type="text" id="login_name" placeholder="请输入手机号/邮箱" ref='phone'>
	 		</div>
	 		<div class="user_name">
	 			<img src="../../assets/img/login/login_r.png">
	 			<input type="password" id="login_name" placeholder="请输入密码" ref='password'>
	 		</div>
	 		<div class="login_password">
	 			<img src="../../assets/img/login/login_yz.png">
	 			<input type="text" id="login_password" placeholder="请输入验证码" ref='yzm'>
	 			<span class='get_yz' @click='get_yz()'>获取验证码</span>
	 			<span class='dell_line'></span>
	 		</div>
	 		<div class='zcxy'>
	 			<img src="../../assets/img/issue/two_true.png">
	 			我同意并接受<span class='xy'>《优蚁用户协议》</span>
	 		</div>
	 		<div class="btnbox"><button type="button" @click='register()'>注册</button></div>
		</div>
	</div>
</template>
<script>
	export default{
	  name: 'login_dynamic',
	  data () {
	    return {
	      yz_show:false,
	      yzms:'http://219.135.58.197:8888/llhb/m/verification/imgCode?w=150&h=50&fontSize=40&str='+ Date.parse(new Date()),
	      istype:'',
	    }
	  },
	  methods: {
	  	yztc:function(){        //阻止冒泡

      	},
      	close_yz:function(){    //第一步验证码弹窗取消
      	  this.yz_show = false;
      	},
      	close_yzms:function(){  //第一步验证码弹窗取消
      	  this.yz_show = false;
      	},
      	toggle_yzm:function(){  //验证码切换
	      this.yzms = 'http://219.135.58.197:8888/llhb/m/verification/imgCode?w=150&h=50&fontSize=40&str='+ Date.parse(new Date())
	    },
	    get_yz:function(){
	    	let phone = this.$refs.phone.value;
	  		let isphone = new RegExp(/^1(3|4|5|7|8)\d{9}$/);
	  		let isemail = new RegExp(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/);
	  		if(isphone.test(phone)){
	  			this.istype = '0'
	  		};
	  		if(isemail.test(phone)){
	  			this.istype = '1'
	  		};
	  		if(!isphone.test(phone) && !isemail.test(phone)){
	  			alert('请输入正确手机号或者邮箱');
	  			return false;
	  		}else{
	  			this.$axios({   
	                method: 'post',
	                url: 'http://219.135.58.197:8888/llhb/m/retrieve/checkUserIsExit',
	                params:{
	                  tel: this.$refs.phone.value,
	                },
	             })
	            .then((response) => {
	                if(response.data.checkUser == 'ok'){
	                	alert('该账号已经注册')
	                	return false;
	                }else{
	                	this.yz_show = true;
	                }
	            })
	  			
	  		}
	    },
	    get_yzms:function(){    //第一步验证码弹窗确定
	        if(this.$refs.yzms.value == ''){
	          alert('请输入图形验证码');
	          return false;
	        }else{
	          this.$axios({   
	                method: 'post',
	                url: 'http://219.135.58.197:8888/llhb/m/verification/validateImgCode',
	                params:{
	                  imgCode: this.$refs.yzms.value,
	                },
	             })
	            .then((response) => {
	                if(response.data){
	                	if(this.istype == '0'){
	                		this.get_phone();
	                	}else{
	                		this.get_email();
	                	}
	                }else{  
	                  alert('验证码错误')
	                } 
	            })
	        }
	    },
	    get_phone:function(){   //获取手机验证码
	        this.$axios({   
	                method: 'post',
	                url: 'http://219.135.58.197:8888/llhb/m/verification/sendCode',
	                params:{
	                  tel: this.$refs.phone.value,
	                },
	             })
	            .then((response) => {
	                if(response.data.message == 'ok'){
	                  alert('已向你手机发送验证码,注意查收');
	                  this.yz_show = false;
	                }
	         })
	    },
	    get_email:function(){   //获取邮箱验证码
	        this.$axios({   
	                method: 'post',
	                url: 'http://219.135.58.197:8888/llhb/m/retrieve/sendEmail',
	                params:{
	                  emailName: this.$refs.phone.value,
	                },
	             })
	            .then((response) => {
	                if(response.data.message == 'ok'){
	                  alert('已向你邮箱发送验证码,注意查收');
	                  this.yz_show = false;
	                }
	         })
	    },
	    register:function(){                 	//登录
	        if(this.$refs.phone.value == ''){
	        	alert('请输入登录名');
	        }else if(this.$refs.password.value == ''){
	        	alert('请输入密码');
	        }else if(this.$refs.yzm.value == ''){
	        	alert('请输入验证码');
	        }else if(this.istype == ''){
	        	alert('请输入正确的验证码');
	        }else{
	        	 this.$axios({     
		            method: 'post',
		            url: 'http://219.135.58.197:8888/llhb/m/register/regNewUser',
		            params:{
	                  username: this.$refs.phone.value,
	                  isMail: this.istype,
	                  checkCode: this.$refs.yzm.value,
	                  password: this.$refs.password.value,
	                },
		         })
		        .then((response) => {
		        	if(response.data.regErr == 'ok'){
		        		alert('注册成功')
		            	this.$router.push({path:'/personal/personal'})
		        	}else{
		        		alert(response.data.regErr);
		        	}
		        })
	        }
	    },
	    goBack:function(){
	    	this.$router.go(-1)
	    }
	  }
	}
</script>
<style scoped lang="scss">
  @import "../../assets/css/scss/cssrem";
  .header-top{
    position: fixed;
    top:0;
    width: 100%;
    height: px2rem(88px);
    display: flex;
  }

  .left-div,.title,.right-div{
    width: 33.3%;
    display: flex;
  }

  .QR-code,.go-back,.telephone,.mine{
    img{
      height: px2rem(40px);
    }
  }

  .QR-code,.go-back{
    height: px2rem(40px);
    width: px2rem(40px);
    margin: px2rem(24px) 0 0 px2rem(29px);
  }

  .go-index{
    @extend .QR-code;
    width: px2rem(98px);
  }

  .title{
    color: #333;
    line-height: px2rem(88px);
    font-size:px2rem(36px);
    p {
      width: 100%;
      margin: 0;
      text-align: center;
    }
  }

  .right-div{
    justify-content: flex-end;
    .telephone,.mine{
      margin: px2rem(24px) px2rem(30px) 0 0;
    }
  }
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
  .zcxy{
  	width: px2rem(560px);
  	margin: px2rem(20px) auto 0;
  	img{
  		float: left;
  		width: px2rem(30px);
  		height: px2rem(30px);
  		margin-right: px2rem(5px);
  	}
  	.xy{
  		color:#00be3a;
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
	.login_password input{
		width: px2rem(300px);
	}
	.get_yz{
		width:px2rem(170px);
		height:px2rem(65px);
		line-height:px2rem(65px);
		text-align: center;
		border-radius: px2rem(4px);
		background: #cccccc;
		color: #fff;
		float: right;
		margin-top: px2rem(10px);
	}
	.dell_line{
		float: right;
	    background: white;
	    height: px2rem(22px);
	    width: px2rem(182px);
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
		font-weight: bold;
		font-size: px2rem(36px);
	}
		.xqlb_tc2{
			 position: fixed;
		    bottom: 0;
		    background-color: rgba(0, 0, 0, 0.6);
		    right: 0;
		    height: 100%;
		    width: 100%;
		    z-index: 2;
	    .msg-window {
	        display: flex;
	        flex-direction: column;
	        justify-content: space-between;
	        background: white;
	        opacity: 1;
	        width: px2rem(503px);
	        height: px2rem(328px);
	        margin: px2rem(360px) auto;
	        border-radius: px2rem(10px);
	        .message {
	          padding-left:0;
	          padding-top:px2rem(30px);
	          font-size: px2rem(36px);
	          text-align: left;
	          color: #333333;
	          margin-left:px2rem(50px);
	          input{
	           border: none;
	           border-bottom: 1px solid #ccc;
	           margin-top:px2rem(50px);
	           width:px2rem(250px);
	           text-align:center;
	           height:px2rem(50px);
	           font-size:px2rem(32px);
	          }
	          img{
	            float:right;
	            margin-right:px2rem(50px);
	            margin-top:px2rem(52px);
	            width:px2rem(150px);
	            height:px2rem(50px);
	          }
	        }
	        .msg-btn {
	          display: flex;
	          text-align: center;
	          border-top: px2rem(2px) solid #cccccc;
	          .msg-btn-left {
	            width: 50%;
	            color: #00be3a;
	            border-right: px2rem(2px) solid #cccccc;
	            height:px2rem(80px);
	            line-height:px2rem(80px);
	          }
	          .msg-btn-right {
	            width: 50%;
	            color: #333333;
	            height:px2rem(80px);
	            line-height:px2rem(80px);
	          }
	        }
	      }      
	  }

</style>