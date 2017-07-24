<template>
	<div class="submitOrders">
	<header-top titleName="提交订单" isIndex="no"></header-top>
	 <div class="all-view">
		 <div class='xqlb_tc xqlb_tc2' @click='close_yz()' v-show='yz_show'>
	      <div class="msg-window">
	          <div class="message" @click.stop='yztc()'>
	            <p>请输入图形验证码</p>
	            <p><input type="text" ref='yzms'><img :src='yzms' @click='toggle_yzm'></p>
	          </div>
	          <div class="msg-btn">
	            <div class="msg-btn-left" @click.stop='get_yzms()'>确定</div>
	            <div class="msg-btn-right" @click='close_yzms()'>取消</div>
	          </div>
	        </div>
	    </div>			
	 <div class="spacing">
	 <div class="message-input">
	 	<div class="list-company">公司名称:</div>
	 	<input type="text" name="" ref='gsmc'>
	 </div>
	 <div class="message-input">
	 	<div class="list-company">联系人:</div>
	 	<input type="text" name="" ref='lxr'>
	 </div>
	 <div class="message-input">
	 	<div class="list-company">联系电话:</div>
	 	<input type="text" name="" ref='lxdh'>
	 </div>
	 <div class="message-input">
	 	<div class="list-company">验证码:</div>
	 	<input type="text" name="" class="lines" ref='yzm'>
	 	<p class="authCode" @click='open_yzms()'>获取验证码</p>
	 </div>
	 <div class="message-check">
	 	<div class="pitchOn"> <img :src="img_true ? require('../../assets/img/issue/two_true.png') : require('../../assets/img/issue/two_false.png')"  @click='toggle_img()'></div>
	 	<p class="agreement">我已阅读并接受<b>《优蚁用户服务协议》</b></p>
	 </div>
	 <div class="submitBtns" @click='but()'>提交</div>
	 </div>
	 </div>
	  <footer-bar></footer-bar>
	</div>
</template>

<script>
 import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'submitOrders',
    computed: mapGetters({
      evmpermit: 'Setdata'
    }),
    data () {
      return {
      	img_true:true,
      	yz_show:false,                      //图形验证码弹窗显示
        yzms:'http://219.135.58.197:8888/llhb/m/verification/imgCode?w=150&h=50&fontSize=40&str='+ Date.parse(new Date()),
        get_yzm:false,
      }
    },
    mounted () {
      this.$nextTick(function () {
        //alert(this.abcname.ffzq);
      })
    },
    methods:{
    	toggle_img:function(){
    		this.img_true = !this.img_true
    	},
    	but:function(){
    		if(this.$refs.gsmc.value == ''){
    			alert('请输入公司名称');
    		}else if(this.$refs.lxr.value == ''){
    			alert('请输入联系人');
    		}else if(this.$refs.lxdh.value == ''){
    			alert('请输入联系电话');
    		}else if(this.$refs.yzm.value == ''){
    			alert('请输入验证码');
    		}else if(!this.get_yzm){
    			alert('请获取手机验证码');
    		}else if(!this.img_true){
    			alert('请勾选优蚁用户服务协议');
    		}else{
    			this.$axios({   
	                method: 'post',
	                url: 'http://219.135.58.197:8888/llhb/m/permit/placeOrder',
	                params:{
	                  type:this.evmpermit.xkzlxs,
	                  declarationState:this.evmpermit.pwsbqk,
	                  addr:this.evmpermit.ffzq,
	                  company:this.$refs.gsmc.value,
	                  contact:this.$refs.lxr.value,
	                  phone:this.$refs.lxdh.value,
	                  isInvoicing:this.evmpermit.sfkjfp,
	                  Invoice:this.evmpermit.fptt,
	                  payType:this.evmpermit.zffz,
	                  notRemove:true,
	                  phoneCode:this.$refs.yzm.value
	                },
	             })
	            .then((response) => {
	                if(response.data.message == 'success'){
	                	let pic_ord = {
	                		orderId : response.data.result.orderId,
	                		price : response.data.result.price
	                	}
	                	this.$store.dispatch('setOrderid',pic_ord)
	                	this.$router.push({path:'/pay'})
	                }else{  
	                  alert('提交失败')
	                } 
	            })
    		}
    	},
    	open_yzms:function(){   //第一步点击获取验证码
    		 let phone = this.$refs.lxdh.value;
	  		 let isphone = new RegExp(/^1(3|4|5|7|8)\d{9}$/);
	         if(!isphone.test(phone)){
	           alert('请输入正确的联系电话');
	           return false;
        	 }
	        this.yz_show = true;
	    },
    	get_yzms:function(){ 
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
	                  this.get_phone();
	                }else{  
	                  alert('验证码错误')
	                } 
	            })
	        }
	      },
	      yztc:function(){        //阻止冒泡

	      },
	      close_yz:function(){    //验证码弹窗取消
	        this.yz_show = false;
	      },
	      close_yzms:function(){  //验证码弹窗取消
	        this.yz_show = false;
	      },
	      get_phone:function(){   //获取手机验证码
	        this.$axios({   
	                method: 'post',
	                url: 'http://219.135.58.197:8888/llhb/m/verification/sendCode',
	                params:{
	                  tel: this.$refs.lxdh.value,
	                },
	             })
	            .then((response) => {
	                if(response.data.message == 'ok'){
	                  alert('已向你手机发送验证码,注意查收');
	                  this.yz_show = false;
	                  this.get_yzm = true;
	                }
	         })
	      },
	      toggle_yzm:function(){  //验证码切换
	        this.yzms = 'http://219.135.58.197:8888/llhb/m/verification/imgCode?w=150&h=50&fontSize=40&str='+ Date.parse(new Date())
	      },
    }
  }
</script>

<style lang="scss">
	@import "../../assets/css/scss/cssrem";
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
		font-size:px2rem(28px);
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
	.xqlb_tc2{
		position: fixed;
	    bottom: 0;
	    background-color: rgba(0, 0, 0, 0.6);
	    right: 0;
	    height: 100%;
	    width: 100%;
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