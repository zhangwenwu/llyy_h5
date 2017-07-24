<template>
  <div class="consult">
    <!--环保资讯-->
    <header-top titleName="环保资讯" isIndex="no"></header-top>
    <div class="all-view">
      <div class="youyi-tabs">
        <div class="youyi-tab" v-for="(item,index) in tabsList" @click="tabClick(index)" :class="{'youyi-tab-active':tabIndex===index}">
          {{item.tabName}}
        </div>
      </div>
      <div class="tab-view-div">
        <div class="tab-view" v-for="(value,key,index) in tabView" v-if="tabIndex===index">
          <div class="tab-view-list" v-for="item in value" >
            <img :src="item.small_img"/>
            <div class="tab-view-left">
              <div class="list-title">{{item.new_title}}</div>
              <div class="list-msg">{{item.msg}}</div>
              <div class="list-bottom">
                <div class="list-date">{{item.time}}</div>
                <div class="list-fromId">{{item.source}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  export default {
    name: 'consult',
    data () {
      return {
        tabIndex: 0,
        tabsList: [
          {tabName: '环保动态'},
          {tabName: '优蚁资讯'},
          {tabName: '环保知识'}
        ],
        tabView: {
          'tabViewList_0': [
           /* {title: '2017年东莞臭氧浓度要达标',
              msg: '东莞计划通过实施VOCS总量控制和区域限批等创新举措根治污染源，力求...',
              date: '2017-05-03',
              fromId: '东莞环保网',
              img: '../../static/img/consult/tab_pic.png'
            },
            {title: '2017年东莞臭氧浓度要达标',
              msg: '东莞计划通过实施VOCS总量控制和区域限批等创新举措根治污染源，力求...',
              date: '2017-05-03',
              fromId: '东莞环保网',
              img: '../../static/img/consult/tab_pic.png'
            },
            {title: '2017年东莞臭氧浓度要达标',
              msg: '东莞计划通过实施VOCS总量控制和区域限批等创新举措根治污染源，力求...',
              date: '2017-05-03',
              fromId: '东莞环保网',
              img: '../../static/img/consult/tab_pic.png'
            },
            {title: '2017年东莞臭氧浓度要达标',
              msg: '东莞计划通过实施VOCS总量控制和区域限批等创新举措根治污染源，力求...',
              date: '2017-05-03',
              fromId: '东莞环保网',
              img: '../../static/img/consult/tab_pic.png'
            },
            {title: '2017年东莞臭氧浓度要达标',
              msg: '东莞计划通过实施VOCS总量控制和区域限批等创新举措根治污染源，力求...',
              date: '2017-05-03',
              fromId: '东莞环保网',
              img: '../../static/img/consult/tab_pic.png'
            },
            {title: '2017年东莞臭氧浓度要达标',
              msg: '东莞计划通过实施VOCS总量控制和区域限批等创新举措根治污染源，力求...',
              date: '2017-05-03',
              fromId: '东莞环保网',
              img: '../../static/img/consult/tab_pic.png'
            }*/
          ],
          'tabViewList_1': [
            /*{title: '我是第二页',
              msg: '东莞计划通过实施VOCS总量控制和区域限批等创新举措根治污染源，力求...',
              date: '2017-05-03',
              fromId: '东莞环保网',
              img: '../../static/img/consult/tab_pic.png'
            }*/
          ],
          'tabViewList_2': [
            /*{title: '我是第三页',
              msg: '东莞计划通过实施VOCS总量控制和区域限批等创新举措根治污染源，力求...',
              date: '2017-05-03',
              fromId: '东莞环保网',
              img: '../../static/img/consult/tab_pic.png'
            }*/
          ]
        }
      }
    },
    mounted () {
      this.$nextTick(function () {
         this.$axios({     
                method: 'post',
                url: 'http://219.135.58.197:8888/llhb/m/zixun/zixunInformation',
                params:{
                    type:'ep_news'
                  },
             })
            .then((response) => {
              this.tabView.tabViewList_0 = response.data.zixuniInfo
            })
      })
    },
    methods: {
      tabClick: function (index) {
        this.tabIndex = index
          if(index == 0){
            this.$axios({     
                  method: 'post',
                  url: 'http://219.135.58.197:8888/llhb/m/zixun/zixunInformation',
                  params:{
                      type:'ep_news'
                    },
               })
              .then((response) => {
                this.tabView.tabViewList_0 = response.data.zixuniInfo
              })
          };
          if(index == 1){
            this.$axios({     
                  method: 'post',
                  url: 'http://219.135.58.197:8888/llhb/m/zixun/zixunInformation',
                  params:{
                      type:'youyi_news'
                    },
               })
              .then((response) => {
                console.log(response.data.zixuniInfo[0].id)
                this.tabView.tabViewList_1 = response.data.zixuniInfo
              })
          };
          if(index == 2){
            this.$axios({     
                  method: 'post',
                  url: 'http://219.135.58.197:8888/llhb/m/zixun/zixunInformation',
                  params:{
                      type:'ep_know'
                    },
               })
              .then((response) => {
                this.tabView.tabViewList_2 = response.data.zixuniInfo
              })
          };
        }
      }

  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/scss/cssrem";

  .youyi-tabs {
    position: fixed;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    height: px2rem(80px);
    border-bottom: px2rem(30px) solid #f0f0f0;
    .youyi-tab {
      text-align: center;
      color: #333333;
      line-height: px2rem(80px);
      font-size:px2rem(30px);
      width: 33.3%;
      &.youyi-tab-active {
        border-bottom: px2rem(2px) solid #00be3a;
        color: #00be3a;
      }
    }
  }

  .tab-view-div{
    width: px2rem(750px);
    .tab-view {
      padding-top: px2rem(110px);
      .tab-view-list {
        display: flex;
        margin: px2rem(30px) px2rem(30px) px2rem(30px);
        height: px2rem(186px);
        img {
          width: px2rem(208px);
        }
        .tab-view-left {
          margin-left: px2rem(30px);
          .list-msg {
            margin: px2rem(20px) 0;
            font-size:px2rem(24px);
          }
          .list-bottom{
            display: flex;
            justify-content: space-between;
            font-size:px2rem(20px);
          }
          .list-title{
            font-size:px2rem(34px);
          }
        }
      }
    }
  }
</style>
