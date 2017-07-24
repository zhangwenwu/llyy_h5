<template>
  <div id='city'>
    <!--居住地址三级联动选项-->
    <input type="text" value="选择地区" id='city_input' readonly='readonly' ref='input' @click="choseAdd"
           class='input_class'/>
    <section class="showChose" v-show="showChose">
      <section class="address">
        <section class="title">
          <span>请选择镇区</span>
          <span @click="closeAdd">×</span>
        </section>
        <section class="addressTitle">
          <div class="area" @click="provinceSelected" :class="Province?'':'active'">{{Province ? Province : '请选择'}}</div>
          <div class="area" @click="citySelected" :class="City?'':'active'" v-show="Province">{{City ? City : '请选择'}}</div>
          <div class="area active" @click="districtSelected" v-show="City">
            {{District ? District : '请选择'}}
          </div>
        </section>
        <ul>
          <li class="addList" v-for="(v,k) in info" @click="getProvinceId(v.id, v.name, k)" v-show="showProvince"
              :class="v.selected ? 'active' : ''">{{v.name}}
          </li>
          <li class="addList" v-for="(v,k) in showCityList" @click="getCityId(v.id, v.name, k)" v-show="showCity"
              :class="v.selected ? 'active' : ''">{{v.name}}
          </li>
          <li class="addList" v-for="(v,k) in showDistrictList" @click="getDistrictId(v.id, v.name, k)"
              v-show="showDistrict" :class="v.selected ? 'active' : ''">{{v.name}}
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'evmpermit',
    created(){
        this.request();
    },
    data () {
      return {
        showChose: false,
        showProvince: true,
        showCity: false,
        showDistrict: false,
        showCityList: false,
        showDistrictList: false,
        province: 5,
        city: 3,
        district: 57,
        GetProvinceId: 2,
        District: false,
        Province: false,
        City: false,
        text: 1,

        // v-for循环判断是否为当前
        selected: false,
        info: [
          {
            id: 26,
            name: '广东',
            city: [{
              id: 4397,
              name: '东莞市',
              district: [

              ]
            }
            ]
          }
        ]
      }
    },
    methods: {
      request(){
  
      },
      choseAdd: function () {
        this.showChose = true
      },
      closeAdd: function () {
        this.showChose = false
      },
      _filter (add, name, code) {
        let result = []
        for (let i = 0; i < add.length; i++) {
          if (code === add[i].id) {
            result = add[i][name]
          }
        }
        return result
      },
      getProvinceId: function (code, input, index) {
        this.province = code
        this.Province = input
        this.showProvince = false
        this.showCity = true
        this.showDistrict = false
        this.showCityList = this._filter(this.info, 'city', this.province)
        this.info.map(a => a.selected = false)
        this.info[index].selected = true
          this.$axios({     
            method: 'post',
            url: 'http://219.135.58.197:8888/llhb/m/linkage/getLinkageJson?id=4397',
         })
        .then((response) => {
            this.info[0].city[0].district = response.data;
        })
      },
      provinceSelected: function () {
        // 清除市级和区级列表
        this.showCityList = false
        this.showDistrictList = false
        // 清除省市区级选项
        this.Province = false
        this.City = false
        this.District = false
        // 选项页面的切换
        this.showProvince = true
        this.showCity = false
        this.showDistrict = false
      },
      getCityId: function (code, input, index) {
        this.city = code
        this.City = input
        this.showProvince = false
        this.showCity = false
        this.showDistrict = true
        this.showDistrictList = this._filter(this.showCityList, 'district', this.city)
        // 选择当前添加active
        this.showCityList.map(a => a.selected = false)
        this.showCityList[index].selected = true

      },
      citySelected: function () {
        this.showProvince = false
        this.showCity = true
        this.showDistrict = false
        // 清除市区级选项
        this.City = false
        this.District = false
      },
      getDistrictId: function (code, input, index) {
        this.district = code
        this.District = input
        // 选择当前添加active
        this.showDistrictList.map(a => a.selected = false)
        this.showDistrictList[index].selected = true
        // 选取市区选项之后关闭弹层
        this.$refs.input.value = this.Province + this.City + this.District
        let area = this.$refs.input.value
        this.$emit('getDistrictId',area,this.district,this.District);
        this.showChose = false
      },
      districtSelected: function () {
        this.showProvince = false
        this.showCity = false
        this.showDistrict = true
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/scss/cssrem.scss";

  li {
    list-style: none;
  }

  #city_input {
    width: px2rem(336px);
    height: px2rem(60px);
    line-height: px2rem(60px);
    font-size: px2rem(24px);
    color: #666;
    border: px2rem(2px) solid #ccc;
    border-radius: px2rem(4px);
    padding: 0 0 0 px2rem(10px);
    margin-top: px2rem(4px);
  }

  .myAddress {
    width: 100%;
    background-color: white;
    border-top: 4px solid rgba(245, 245, 245, 1);
    color: #333;
  }

  .myAddress .cont {
    border-bottom: 1px solid rgba(245, 245, 245, 0.8);
  }

  .myAddress .cont span {
    display: inline-block;
    font-size: 0.28rem;
    color: #333;
    line-height: 0.88rem;
    margin-left: 0.32rem;
  }

  .myAddress .cont section {
    float: left;
  }

  .myAddress .cont p {
    display: inline-block;
    font-size: 0.28rem;
    color: #333333;
    line-height: 0.88rem;
    margin-left: 1rem;
  }

  .myAddress .cont .pic2 {
    float: right;
    width: 0.14rem;
    height: 0.24rem;
    margin: 0.32rem 0.32rem 0.32rem 0;
  }

  .myAddress .cont p.text {
    margin-left: 0.72rem;
  }

  .showChose {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 120;
    background: rgba(77, 82, 113, 0.8);
  }

  .address {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 121;
    background: #fff;
    width: 100%;
  }

  .title {
    text-align: center;
    line-height: px2rem(80px);
    border-bottom: px2rem(2px) solid #f0f0f0;
    span {
      margin-left: px2rem(250px);
      font-size: 0.45rem;
      line-height: 0.34rem;
      color: #666666;
    }
  }

  .area {
    display: inline-block;
    font-size: 0.5rem;
    line-height: 1rem;
    margin-left: 0.42rem;
    color: #333;
  }

  .addList {
    width: 100%;
    font-size: 0.45rem;
    line-height: 1rem;
    color: #333;
  }

  /* 修改的格式 */
  .address ul {
    width: 95%;
    padding: 0;
    height: 4.4rem;
    overflow: auto;
  }

  .address ul {
    margin-left: 5%;
  }

  .address .addressTitle .active {
    color: #0071B8;
    border-bottom: 0.02rem solid #0071B8;
  }

  .address ul .active {
    color: #0071B8;
  }
</style>
