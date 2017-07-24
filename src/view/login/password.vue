<template>
	<div class='password'>
		  <div class="header-top">
		    <div class="left-div">
		      <div class="go-back" @click="goBack">
		        <img src="../../assets/img/header/go_back_b.png">
		      </div>
		    </div>
		    <div class="title"><p>找回密码</p></div>
		  </div>
		<div class='login_form'>
			<div class='one' v-show='one_show'>
				<div class="user_name">
		 			<input type="text" id="login_name" placeholder="请输入手机号/邮箱" ref='phone'>
		 		</div>
		 		<div class='zcxy'>
		 			为了安全，我们会向您的手机号/邮箱发送验证码
		 		</div>
		 		<div class="btnbox"><button type="button" @click='one_next()'>下一步</button></div>
	 		</div>
	 		<div class='two' v-show='two_show'>
	 			<div class='zcxy'>
		 			已向<span class='xy'>{{uesr_name}}</span>发送验证码
		 		</div>
	 			<div class="login_password">
		 			<input type="text" id="login_password" placeholder="请输入验证码" ref='yzm'>
		 			<span class='get_yz' @click='cx()'>重新发送</span>
		 			<span class='dell_line'></span>
		 		</div>
		 		<div class="user_name">
		 			<input type="password" id="login_name" placeholder="请输入密码" ref='password'>
		 		</div>
		 		<div class="btnbox"><button type="button" @click='password_but()'>提交</button></div>
	 		</div>
	 		
		</div>
	</div>
</template>
<script>
	 export default{
	 	name: 'login_dynamic',
		  data () {
		    return {
		      one_show:true,
		      two_show:false,
		      yzms:'http://219.135.58.197:8888/llhb/m/verification/imgCode?w=150&h=50&fontSize=40&str='+ Date.parse(new Date()),
		      istype:'',
		      uesr_name:'',
		    }
		  },
		methods: {
		  one_next:function(){
		  	this.uesr_name = this.$refs.phone.value;
	            this.$axios({   
		                method: 'post',
		                url: 'http://219.135.58.197:8888/llhb/m/verification/sendCode',
		                params:{
		                  tel: this.$refs.phone.value,
		                },
		             })
		            .then((response) => {
		                if(response.data.message == 'ok'){
		                  this.two_show = true;
		                  this.one_show = false;
		                }else{
		                	alert(response.data.message);
		                }
		         })

		  },
		  cx:function(){
		  	 this.$axios({   
		                method: 'post',
		                url: 'http://219.135.58.197:8888/llhb/m/verification/sendCode',
		                params:{
		                  tel: this.$refs.phone.value,
		                },
		             })
		            .then((response) => {
		                if(response.data.message == 'ok'){
		                  alert('重新发送验证码成功')
		                }else{
		                	alert(response.data.message);
		                }
		         })
		  },
		  password_but:function(){
		  	if(this.$refs.yzm.value == ''){
		  		alert('请输入验证码');
		  	}else if(this.$refs.password.value == ''){
		  		alert('请输入密码');
		  	}else{
		  		 this.$axios({   
		                method: 'post',
		                url: 'http://219.135.58.197:8888/llhb/m/retrieve/saveNewPwd',
		                params:{
		                  username: this.$refs.phone.value,
		                  checkCode: this.$refs.yzm.value,
		                  newPwd: this.$refs.password.value,
		                },
		             })
		            .then((response) => {
		                if(response.data.NewPwdErr == 'ok'){
		                  alert('修改密码成功');
		                  this.$router.push({path:'/personal/personal'})
		                }else{
		                	alert(response.data.NewPwdErr);
		                }
		         })
		  	}
		  },
		  goBack: function () {
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
    border:px2rem(1px) solid #ccc;
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
  .login_form{
  	margin-top:px2rem(128px);
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
  	font-size:px2rem(20px);
  	margin-bottom:px2rem(20px);
  	img{
  		float: left;
  		width: px2rem(30px);
  		height: px2rem(30px);
  		margin-right: px2rem(5px);
  	}
  	.xy{
  		color:#ff0000;
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
		background: #00be3a;
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