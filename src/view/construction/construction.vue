<template>
	<div class="construction">
	<header-top :titleName="titles" isIndex="no"></header-top>
	 <div class="all-view">
   <div class='xqlb_tc' @click='close_tc()' v-show='tc_show'>
      <div class="msg-window">
          <div class="message" @click.stop='tc()'>
            <div class='lb' @click.stop='lb(tbs,tbs.value)' v-for='tbs in tb'>{{tbs}}</div>
          </div>
        </div>
    </div>
	 <div class="tops-pic">
	 	<img :src= imgSrc> 
	 </div>
	 <div class="multiple">
	 <div class="options">
	 	<div class="classify" @click='xqlb()'>{{fl}}
	 <!--   <img src="../../assets/img/construction/down-arrow.png" > -->
	 	</div>
	 	<div class="region">
	 	<!-- <img src="../../assets/img/construction/down-arrow.png"> -->
    <city-bar @getDistrictId='one_diqu'></city-bar>
	 	</div>
	 	<input  type="date" class="release-time" placeholder="Search W3School">
	 </div>
	 </div>
	 <table class="biggest">
		  <thead>
		    <tr>
		      <th class="designation">项目名称</th>
		      <th class="status">需求状态</th>
		      <th class="times">发布时间</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <td>南城广东绿...环保工程</td>
		      <td>等待接单</td>
		      <td class="dates">2017/05/13</td>
		    </tr>
		    <tr>
		      <td>南城广东绿...环保工程</td>
		      <td>等待接单</td>
		      <td class="dates">2017/05/13</td>
		    </tr>
		    <tr>
		      <td>南城广东绿...环保工程</td>
		      <td>等待接单</td>
		      <td class="dates">2017/05/13</td>
		    </tr>
		    <tr>
		      <td>南城广东绿...环保工程</td>
		      <td>等待接单</td>
		      <td class="dates">2017/05/13</td>
		    </tr>
        <tr>
          <td>南城广东绿...环保工程</td>
          <td>等待接单</td>
          <td class="dates">2017/05/13</td>
        </tr>
        <tr>
          <td>南城广东绿...环保工程</td>
          <td>等待接单</td>
          <td class="dates">2017/05/13</td>
        </tr>
        <tr>
          <td>南城广东绿...环保工程</td>
          <td>等待接单</td>
          <td class="dates">2017/05/13</td>
        </tr>
		  </tbody>
	 </table>
	 <!-- <pager
        mode="params"
        route-name="pageRoute"
        :total-page="totalPage"
        :init-page="paramsPage"></pager> -->
  <div class="our-order">
    <router-link to="/recommend"><img src="../../assets/img/construction/order.png"></router-link>
  </div>
  <div class="post-demand">
     <router-link to="/issue"><img src="../../assets/img/construction/post-demand.png"></router-link>
  </div>
	 </div>
	 <footer-bar></footer-bar>
	</div>
</template>

<script>
    import pager from '../../components/pager.vue'

    export default {
        data () {
            return {
                eventPage: 1,
                queryPage: 1,
                paramsPage: 1,
                totalPage: 10,
                tc_show: false,                     //需求类别弹窗显示
                tb:['环评','环境检测','环保工程','项目验收','应急预案','清洁生产','ISO14001认证','环保设备','环保配件','材料药剂','其他'],                             //需求类别数据
                fl:'选择分类',
                imgSrc: require('../../assets/img/construction/big-graph.png'),
                titles:'环保工程',
            }
        },

        components: {
            'pager': pager
        },
        mounted () {
          this.$nextTick(function () {
            /*if (this.$route.params.type === 'tab-assess') {
              this.imgSrc = require ('../../assets/img/construction/assessment.jpg')
            }
            console.log(this.$route.params);
            console.log(this.titles);*/
              switch (this.$route.params.type) 
              { 
                case 'tab-assess':this.imgSrc = require ('../../assets/img/construction/assessment.jpg');
                this.titles = '环评'
                break; 
                case 'tab-monitor':this.imgSrc = require ('../../assets/img/construction/monitoring.jpg');
                this.titles = '环境监测'
                break; 
                case 'tab-production':this.imgSrc = require ('../../assets/img/construction/cleaner.jpg');
                this.titles = '清洁生产'
                break;
                case 'tab-acceptance-check':this.imgSrc = require ('../../assets/img/construction/cleaner.jpg');
                this.titles = '项目验收'
                break;
                case 'tab-contingency-plan':this.imgSrc = require ('../../assets/img/construction/cleaner.jpg');
                this.titles = '应急预案'
                break;
                case 'tab-authentication':this.imgSrc = require ('../../assets/img/construction/cleaner.jpg');
                this.titles = 'ISO14001'
                break;
                case 'tab-equipment':this.imgSrc = require ('../../assets/img/construction/cleaner.jpg');
                this.titles = '环保设备'
                break;
                case 'tab-accessories':this.imgSrc = require ('../../assets/img/construction/cleaner.jpg');
                this.titles = '环保配件'
                break;
                case 'tab-medicament':this.imgSrc = require ('../../assets/img/construction/cleaner.jpg');
                this.titles = '材料药剂'
                break;
                case 'tab-others':this.imgSrc = require ('../../assets/img/construction/cleaner.jpg');
                this.titles = '其他'
                break; 
              }
          })
        },
        methods: {
            goPage (data) {
                this.eventPage = data.page
            },
            close_tc: function () {               //第一步需求类别弹窗事件
              this.tc_show = false;
            },
            tc: function () {               //第一步需求类别弹窗事件

            },
            lb: function (e,d) {               //第一步需求类别弹窗事件
              this.fl = e;
              this.tc_show = false;
              /*this.tb_value = d;*/
            },
            xqlb: function () {                   //第一步需求类别点击事件
              /*this.$axios({     
                  method: 'post',
                  url: 'http://219.135.58.197:8888/llhb/m/requirement/allCategory',
               })
              .then((response) => {
                  this.tb = response.data.categorys;
                  console.log(response.data.categorys);
              })*/
              this.tc_show = true;
            },
            one_diqu:function(e,d,f){    //选择地区
              this.area = e;
              this.district = d;
             this.district_name = f;
          }
        },
        route: {
            data ({to: {query, params}}) {
                if(params.page) {
                    this.paramsPage = parseInt(params.page) || 1
                } else {
                    this.paramsPage = 1
                }
                if(query.page) {
                    this.queryPage = parseInt(query.page) || 1
                } else {
                    this.queryPage = 1
                }
            }
        }
    }
</script>

<style lang="scss">
  @import "../../assets/css/scss/cssrem";
  .tops-pic img{
  	width:100%;
  }
  .multiple{
  	border-bottom:1px solid #b7b7b7;
  	margin-bottom:36px;
  }
  .options{
  	width:px2rem(700px);
  	margin:0 auto;
  	display: flex;
  	margin-top:px2rem(24px);
  	margin-bottom:px2rem(28px);
  }
  .options .classify{
  	width:px2rem(214px);
  	height:px2rem(83px);
  	border-radius:px2rem(4px);
  	background:#e4eff4;
  	text-align:center;
  	line-height:px2rem(83px);
  	font-size:px2rem(26px);
  	margin-right:px2rem(12px);
  }
  .options .region{
  	width:px2rem(250px);
  	height:px2rem(83px);
  	border-radius:px2rem(4px);
  	background:#e4eff4;
  	text-align:center;
  	line-height:px2rem(83px);
  	font-size:px2rem(26px);
  	margin-right:px2rem(12px);
    position:relative;
    z-index:2;
  }
  .options .region .input_class{
    position:absolute;
    top:0;
    right:0;
    width:px2rem(250px) !important;
    height:px2rem(83px) !important;
    border-radius:px2rem(4px);
    background:none;
    padding:0 !important;
    margin-top:0 !important;
    border:0 !important;
    text-align:center !important;
    z-index:-1;
     color:#333 !important; 
    font-size:px2rem(26px) !important;
  }
  .options .release-time{
  	width:px2rem(214px);
  	height:px2rem(83px);
  	border-radius:px2rem(4px);
  	background:#e4eff4;
  	text-align:center;
  	line-height:px2rem(83px);
  	font-size:px2rem(26px);
  	border:0;
  }
  .biggest{
  	width:px2rem(686px);
  	margin:0 auto;
  	border-collapse: collapse;
  }
  .biggest .designation{
  	text-align:left;
  }
  .biggest .status{
  	text-align:left;
  }
  .biggest .times{
  	text-align:right;
  }
  .biggest .dates{
  	text-align:right;
  }
  tbody tr{
  	height:px2rem(114px);
  	border-bottom:1px solid #cecdcd;
  }
  thead th{
  	font-size:px2rem(32px);
  }
  thead td{
  	font-size:px2rem(26px);
  }
  .our-order{
    width:px2rem(114px);
    height:px2rem(114px);
    position: fixed;
    top:px2rem(740px);
    right:px2rem(32px);
  }
  .our-order img{
    width:100%;
    z-index:9999;
  }
  .post-demand{
    width:px2rem(114px);
    height:px2rem(114px);
    position: fixed;
    top:px2rem(860px);
    right:px2rem(32px);
  }
  .post-demand img{
    width:100%;
  }
  .xqlb_tc{
    position: fixed;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    right: 0;
    height: 100%;
    width: 100%;
    z-index:8;
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
            margin-right:px2rem(20px);
            margin-top:px2rem(42px);
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