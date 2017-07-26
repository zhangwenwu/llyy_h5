<template>
  <div class="issue">
   <header-top titleName="发布需求" isIndex="no" isIssue="true"></header-top>
    <div class="all-view">
    <div class='xqlb_tc' @click='close_tc()' v-show='tc_show'>
      <div class="msg-window">
          <div class="message" @click.stop='tc()'>
            <div class='lb' @click.stop='lb(tbs,tbs.value)' v-for='tbs in tb'>{{tbs}}</div>
          </div>
        </div>
    </div>
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
    <div class='one' v-show='one_show'>
        <div class="introduce">
          <img src="../../assets/img/issue/introduce.png">
          </div>
          <div class="post-demand">
          <div class="list-category">需求类别:</div>
          <input type="text" name="" class="demand-input" ref='xqlb' @click='xqlb()'>
         </div>
         <div class="post-demand">
          <div class="list-category">公司名称:</div>
          <input type="text" name="" class="demand-input" ref='gsmc' v-model='three_gsmc'>
         </div>
         <div class="post-demand">
          <div class="list-category">所在地区:</div>
          <city-bar @getDistrictId='one_diqu'></city-bar>
         </div>
         <div class="post-demand">
          <div class="list-category">公司地址:</div>
          <input type="text" name="" class="demand-input" ref='gsdz' v-model='three_xxdz'>
         </div>
         <div class="post-demand">
          <div class="list-category">联系人:</div>
          <input type="text" name="" class="demand-input" ref='lxr' v-model='three_lxr'>
         </div>
         <div class="post-demand">
          <div class="list-category">联系电话:</div>
          <input type="text" name="" class="demand-input" ref='lxdh' v-model='three_lxfs'>
         </div>
         <div class="post-demand yzm">
          <div class="list-category">验证码:</div>
          <input type="text" name="" class="demand-input" ref='yzm'>
          <div @click='open_yzms()' class='open_yzms'>获取验证码</div>
         </div>
         <div class="comb">环保顾问为你梳理需求:<span class='number'>0769-2166 9939</span></div>
         <div class="next-step" @click='one_next()'>下一步</div>
        
     </div>
     <!-- 第二步 -->
     <div class='two' v-show='two_show'>
       <div class='two_top'>
         <img src="../../assets/img/issue/two_progress.png">
       </div>
       <div class='two_service'>
         <h4>请选择您需要的服务<span>(可多选)</span></h4>   
         <div>
           <div class='yltj'>
             <p class='top'>
               <img :src="img_true ? require('../../assets/img/issue/two_true.png') : require('../../assets/img/issue/two_false.png')"  @click='toggle_img()'>
               优蚁优质推荐
             </p>
             <p>优蚁承诺24小时内，推荐优质环保公司响应您的需求</p>
           </div>
           <div class='xqdtfb'>
             <p class='top'>
               <img :src="img_true2 ? require('../../assets/img/issue/two_true.png') : require('../../assets/img/issue/two_false.png')"  @click='toggle_img2()'>
               需求大厅发布
             </p>
             <p>你的需求将推送至需求大厅，将有更多环保公司响应您的需求</p>
             <ul>
                <li>请选择响应需求的环保公司家数:<select class='first'  v-model="xyjs">
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select></li>
                <li>请选择需求发布的有效天数:<input type="text"  v-model="yxts"></li>
            </ul>
            <div class='yjsj'>
              请选择预计完成时间:<input type="date" name="" ref='yjsj'>
            </div>
            <div class='xqbz'>
              <textarea rows="3" cols="20" placeholder='点击添加需求备注(选填)' v-model='three_xqbz'></textarea>
            </div>
           </div>
         </div>
       </div>
       <ul class='next'>
         <li class='up' @click='two_up()'>上一步</li>
         <li class='down' @click='two_next()'>下一步</li>
       </ul>
     </div>
     <!-- 第三步 -->
     <div class='three' v-show='three_show'>
       <div class='three_top'>
         <img src="../../assets/img/issue/three_progress.png">
       </div>
       <div class='three_center'>
         <div class='my_xq'>
           <span class='bor_bot'>我的需求:<span class='xqlx'>{{three_xqlb}}</span></span>
         </div>
         <ul class='xqxq'>
           <li><i>公司名称:</i><span>{{three_gsmc}}</span></li>
           <li><i>详细地址:</i><span>{{three_xxdz}}</span></li>
           <li><i>联系人:</i><span>{{three_lxr}}</span></li>
           <li><i>联系方式:</i><span>{{three_lxfs}}</span></li>
           <li class='fw'><i>已选服务:</i><span><ul>
             <li v-show='yxfu1'>优蚁优质推荐</li>
             <li v-show='yxfu2'>需求大厅发布</li>
             <li v-show='yxfu2'>响应公司数:<b>{{xyjs}}</b>家</li>
             <li v-show='yxfu2'>需求有效天数:<b>{{yxts}}</b>天</li>
           </ul></span></li>
           <li><i>预计完成:</i><span>{{three_yjwc}}</span></li>
           <li><i class='xqbz'>需求备注:</i><span>{{three_xqbz}}</span></li>
         </ul>
       </div>
       <ul class='next'>
         <li class='up' @click='three_up()'>上一步</li>
         <li class='down' @click='three_but()'>确认发布</li>
       </ul>
     </div>
  </div>
  </div>
</template>
<script>

  export default{
    name: 'issue',
    /*created(){
        this.request();
    },*/
    data () {
      return {
        district:'',                        //区域id
        district_name:'',                   //区域名字
        area:'',                            //地址
        tc_show: false,                     //需求类别弹窗显示
        one_show: true,                     //第一步显示
        two_show: false,                    //第二步显示
        three_show: false,                  //第三步显示
        tb:['环评','环境检测','环保工程','项目验收','应急预案','清洁生产','ISO14001认证','环保设备','环保配件','材料药剂','其他'],                                 //需求类别数据
        tb_value:[],                        //需求类别数据英文
        img_true: false,                    //第二步第一个选中图片
        img_true2: false,                   //第二步第二个选中图片              
        yxts:'',                            //第三步预计天数
        xyjs:'',                            //第三步需求家数
        three_xqlb:'',                      //第三步需求类别
        three_gsmc:'',                      //第三步公司名称
        three_xxdz:'',                      //第三步联系电话
        three_lxr:'',                       //第三步联系人
        three_lxfs:'',                      //第三步联系方式
        three_yjwc:'',                      //第三步预计完成时间
        three_xqbz:'',                      //第三步需求备注
        three_fw:'',                        //第三步已选服务id
        yxfu1:false,                        //第三步已选服务第一步
        yxfu2:false,                        //第三步已选服务第二步
        yz_show:false,                      //图形验证码弹窗显示
        yzms:'http://219.135.58.197:8888/llhb/m/verification/imgCode?w=150&h=50&fontSize=40&str='+ Date.parse(new Date()), //获取图形验证码
      }
    },
    methods: {
     /*request(){
        this.$axios({     
            method: 'post',
            url: 'http://yyhb.tunnel.qydev.com/llhb/m/verification/imgCode?str='+ Date.parse(new Date()),
            params:{
              w: '145',
              h: '60',
              fontSize:'24'
            },
         })
        .then((response) => {
            this.img = response.data;
            console.log(response.data);
        })
      },*/
      open_yzms:function(){   //第一步点击获取验证码
         if(this.$refs.lxdh.value == ''){
           alert('请输入联系电话');
          return false;
        }
        this.yz_show = true;
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
                  this.get_phone();
                }else{  
                  alert('验证码错误')
                } 
            })
        }
      },
      yztc:function(){        //阻止冒泡

      },
      close_yz:function(){    //第一步验证码弹窗取消
        this.yz_show = false;
      },
      close_yzms:function(){  //第一步验证码弹窗取消
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
                }
         })
      },
      one_diqu:function(e,d,f){    //选择地区
       
        this.area = e;
        this.district = d;
        this.district_name = f;
      },
      toggle_yzm:function(){  //验证码切换
        this.yzms = 'http://219.135.58.197:8888/llhb/m/verification/imgCode?w=150&h=50&fontSize=40&str='+ Date.parse(new Date())
      },
      one_next: function () {               //第一步点击下一步事件
        if(this.$refs.xqlb.value == ''){
          alert('请选择需求类别');
         }else if(this.$refs.gsmc.value == ''){
            alert('请输入公司名称');
         }else if(this.area == '' ||this.area == '选择地区'){
            alert('请选择所在地区');
         }else if(this.$refs.gsdz.value == ''){
            alert('请输入公司地址');
         }else if(this.$refs.lxr.value == ''){
            alert('请输入联系人');
         }else if(this.$refs.lxdh.value == ''){
            alert('请输入联系电话');
         }else if(this.$refs.yzm.value == ''){
            alert('请输入手机验证码');
         }else{
            this.two_show = true;
            this.one_show = false;
            this.$axios({   
                method: 'post',
                url: 'http://219.135.58.197:8888/llhb/m/verification/validateCode',
                params:{
                  tel: this.$refs.lxdh.value,
                  checkCode: this.$refs.yzm.value,
                },
             })
            .then((response) => {
                if(response.data.message == 'ok'){
                  this.two_show = true;
                  this.one_show = false;
                }else{
                  alert('手机验证码错误')
                }
           })
            
            
         }
         
      },
      close_tc: function () {               //第一步需求类别弹窗事件
        this.tc_show = false;
      },
      tc: function () {               //第一步需求类别弹窗事件

      },
      lb: function (e,d) {               //第一步需求类别弹窗事件
        this.$refs.xqlb.value = e;
        this.tc_show = false;
        this.tb_value = d;
      },
      xqlb: function () {                   //第一步需求类别点击事件
        this.$axios({     
            method: 'post',
            url: 'http://219.135.58.197:8888/llhb/m/requirement/allCategory',
         })
        .then((response) => {
            this.tb = response.data.categorys;
        })
        this.tc_show = true;
      },
      toggle_img:function(){                //第二步图片切换事件
        this.img_true = !this.img_true
      },
      toggle_img2:function(){
        this.img_true2 = !this.img_true2
      },
      two_next: function () {              //第二步下一步事件
        this.three_xqlb = this.$refs.xqlb.value; //需求类别赋值
        this.three_yjwc = this.$refs.yjsj.value;
        if(!this.img_true && !this.img_true2){
          alert('请选择服务方式');
          return false;
        }
        if(this.img_true){
          this.three_fw = 1;
          this.yxfu2 = false;
          this.yxfu1 = true;
        }
        if(this.img_true2){
         if(this.yxts == ''){
          alert('请输入发布的有效天数,最高为30天');
          return false;
         }else if(this.yxts > 30){
          alert('发布的有效天数最高为30天');
          return false;
         }else if(this.xyjs == ''){
          alert('请选择响应环保公司的家数');
          return false;
         }
         this.three_fw = 0;
         if(this.img_true){
           this.three_fw = 2;
           this.yxfu1 = true;
           this.yxfu2 = true;
         }else{
           this.yxfu2 = true;
           this.yxfu1 = false;
         }
         
        }
        this.two_show = false;
        this.three_show = true;
      },
      two_up: function () {                 //第二步上一步事件
        this.one_show = true;
        this.two_show = false;
      },
      three_up: function () {               //第三步上一步事件
        this.three_show = false;
        this.two_show = true;
      },
      three_but:function(){                 //第三步确定发布事件
        if(confirm("确定发布吗?")){
            alert('发布成功');
           this.$axios({   
                method: 'post',
                url: 'http://wy.tunnel.qydev.com/llhb/m/requirement/saveRequirement',
                params:{
                  sysCategory: this.$refs.xqlb.value, // 需求类别  : 中文
                  engCategory: this.tb_value,         // 需求类别  : 英文
                  companyName:this.three_gsmc,        // 公司名称
                  provinceId: 26,                     // 省ID
                  provinceName: '广东省',             // 省名称
                  cityId:4397,                        // 市ID
                  cityName: '东莞市',                 // 市名称
                  areaId: this.district,              // 区ID
                  areaName:this.district_name,        // 区名称
                  companyAdreess: this.three_xxdz,    // 公司地址
                  contactPeople: this.three_lxr,      // 联系人
                  contactPhone:this.three_lxfs,       // 联系电话
                  expectedTime: this.three_yjwc,      //项目预计完成时间
                  effectiveDate: this.yxts,           // 需求有效天数
                  companyCount:this.xyjs,             // 环保公司家数
                  service: this.three_fw,             // 0:需求大厅 1:优蚁推荐 2:同时选中
                  requireDescribe: this.three_xqbz,   // 需求发布备注
                },
             })
            .then((response) => {
                if(response.data.message == 'success'){
                  alert('发布成功')
                }else{  
                  alert('发布失败,请重试')
                } 
            })
          }
      }
    }
  }
</script>
<style lang="scss">
@import "../../assets/css/scss/cssrem";
  *{
    padding:0;
    margin:0;
    list-style:none;
  }
  .xqlb_tc{
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
      width: px2rem(690px);
      height: px2rem(600px);
      margin: px2rem(360px) auto;
      border-radius: px2rem(10px);
      .message {
        padding-top: px2rem(55px);
        padding-left:px2rem(40px);
        font-size: px2rem(36px);
        text-align: center;
        color: #333333;
      }
      .lb{
        float:left;
        padding:px2rem(12px) px2rem(20px) ;
        margin:0 px2rem(40px) px2rem(40px) 0;
        border:1px solid #333;
        color:#333;
        text-align:center;
        font-size:px2rem(30px);
        border-radius:px2rem(4px);
      }
     .lb:nth-child(3n+0){

     }
    }
  }
  .xqlb_tc2{
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
  /*第一步*/
   .one{
     .introduce img{
        width:100%;
      }
       .post-demand{
        width:px2rem(690px);
        margin:0 auto;
        display:flex;
        height:px2rem(80px);
        margin-bottom:px2rem(20px);
       }
       .post-demand .list-category{
        width:px2rem(134px);
        font-size: px2rem(28px);
        line-height:px2rem(80px);
       }
       .post-demand .demand-select{
        width:px2rem(558px);
        height:px2rem(80px);
        border-radius:px2rem(4px);
        padding-left:px2rem(4px);
        margin-left:px2rem(-2px);
       }
       .post-demand .demand-input{
        width:px2rem(554px);
        height:px2rem(80px);
        border-radius:px2rem(4px);
        border:0;
        border:1px solid #bfbfbf;
        padding-left:px2rem(10px);
        font-size:px2rem(30px);
       }
       .yzm{
        
        img{
          width:px2rem(170px);
          margin-left:px2rem(34px);
        }
       }
       .yzm .demand-input{
          width:px2rem(350px);
       }
        .yzm .open_yzms{
          width:px2rem(180px);
          height:px2rem(80px);
          background:#00b13a;
          color:#fff;
          text-align:center;
          line-height:px2rem(80px);
          margin-left:px2rem(20px);
          border-radius:px2rem(4px);
       }
      .comb{
        text-align:center;
        font-size: px2rem(28px);
        margin-top:px2rem(40px);
        .number{
          color: #00be3a;
        }
       }
       .next-step{
        width:px2rem(562px);
        height:px2rem(80px);
        background:#ccc;
        border-radius:10px;
        text-align:center;
        margin:0 auto;
        line-height:px2rem(80px);
        font-size:px2rem(36px);
        color:#fff;
        margin-top:px2rem(62px);
       }
       #city_input{
        width:px2rem(534px);
        height:px2rem(80px);
        border-radius:px2rem(4px);
        border:none;
        border:1px solid #bfbfbf;
        padding-left:px2rem(20px);
        font-size:px2rem(30px);
        color:#333;
       }
   }
   
   /*第二步*/
   .two{
   }
   .two_top{
    text-align:center;
    img{
    margin:px2rem(60px) 0;
    width:px2rem(686px);
    }
   }
   .two_service{
    margin-left:px2rem(30px);
    h4{
      font-size:px2rem(32px);
      margin-bottom:px2rem(40px);
      span{
        font-size:px2rem(22px);
      }
    }
    .yltj{
      margin-bottom:px2rem(40px);
      .top{
        font-size:px2rem(36px);
        margin-bottom:px2rem(15px);
        color:#333;
        img{
          width:px2rem(30px);
          height:px2rem(30px);
        }
      }
      p{
        font-size:px2rem(28px);
        color:#666;
      }
    }
    .yjsj{
      input{
        margin-left:px2rem(50px);
        -webkit-appearance: none;
        background-color:transparent; border-color:transparent;
        width:px2rem(200px);
        height:px2rem(60px);
        margin-bottom:px2rem(40px);
        border:none;
        border:px2rem(1px) solid #ccc;
        text-align:center;
        padding-left:px2rem(86px);
        font-size:px2rem(20px);
        margin-top:px2rem(-4px);
        color:#666;
        border-radius: px2rem(4px);
      }
    }
    .xqdtfb{
      margin-bottom:px2rem(40px);
      .top{
        font-size:px2rem(36px);
        margin-bottom:px2rem(15px);
        color:#333;
        img{
          width:px2rem(30px);
          height:px2rem(30px);
        }
      }
      p{
        font-size:px2rem(28px);
        color: #666;
        margin-bottom:px2rem(40px);
      }
      ul{
        li{
          font-size:px2rem(26px);
          select,input{
            margin-left:px2rem(30px);
            -webkit-appearance: none;
            background-color:transparent; border-color:transparent;
            width:px2rem(200px);
            height:px2rem(60px);
            margin-bottom:px2rem(40px);
            border:none;
            border:px2rem(1px) solid #ccc;
            text-align:center;
            padding-left:px2rem(86px);
            font-size:px2rem(20px);
            margin-top:px2rem(-4px);
            color:#666;
            border-radius: px2rem(4px);
          }
          input{
            width:px2rem(200px);
            padding:0;
            margin-left:px2rem(86px);
          }
          .first{
           
          }
        }
      }
      .yjsj{
        font-size:px2rem(32px);
      }
      .xqbz{
        textarea{
          width:px2rem(666px);
          height:px2rem(200px);
          margin-top:px2rem(60px);
          border-radius:px2rem(4px);
          padding:px2rem(10px);
          margin-bottom:px2rem(80px);
        }
      }
    }
   }
  .next{
    width:px2rem(686px);
    margin:0 auto;
    li{
      width:px2rem(326px);
      float:left;
      height:px2rem(80px);
      line-height:px2rem(80px);
      text-align:center;
      border:px2rem(1px) solid #00be3a;
      color: #00be3a;
      border-radius: px2rem(4px);
    }
    .up{
      margin-right:px2rem(20px);
    }
    .down{
      background: #00be3a;
      color: #fff;
    }
  }

  .three{
   }
   .three_top{
    text-align:center;
    img{
    margin:px2rem(60px) 0;
    width:px2rem(686px);
    }
   }
   .three_center{

    width: px2rem(686px);
    margin: 0 auto;
    margin-bottom: px2rem(100px);
    .bor_bot{
      width: px2rem(450px);
      margin: 0 auto;
      font-size: px2rem(36px);
      display: block;
      margin-bottom: px2rem(60px);
      border-bottom: px2rem(1px) solid #ccc;
      padding-bottom: px2rem(20px);
      text-align: center;
      .xqlx{
        color:#00be3a;
      }
    }
    .xqxq{
      font-size: px2rem(30px);
      color: #666;
      li{
        margin-bottom: px2rem(30px);
        clear: both;
        i{
          font-style: normal;
          width: px2rem(150px);
          float: left;
        }
        .xqbz{
          height: px2rem(100px);
        }
        span{
          color: #333;
          margin-right: 20px;

        }
      }
      .fw{
        ul{
          float: left;

          li{
            margin-bottom: px2rem(10px);
            span{
              width: px2rem(38px);
              height: px2rem(38px);
              border-radius: 50%;
              border: px2rem(1px) solid #333;
              float: left;
              text-align: center;
              line-height: px2rem(38px);
              margin-right: px2rem(10px);

            }
          }
        }
      }
    }
   }
</style>
