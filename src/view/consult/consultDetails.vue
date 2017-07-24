<template>
  <div class="consultDetails">
    <header-top isIndex="no"></header-top>
    <div class="all-view">
      <p>{{DetailTitle}}</p>
      <p>来源：{{from}} <span>{{DetailDate}}</span></p>
      <img src=""/>
      <p>{{content}}</p>
      <div>
        <p>上一篇：{{DetailLast}}</p>
        <p>下一篇：{{DetailNext}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'consultDetails',
  data () {
    return {
      DetailTitle: '广东环保人奋战京津冀大气强化督查一线鲁修禄厅长亲临慰问鼓劲',
      from: '广东环境保护',
      DetailDate: '2017-05-24',
      img: '',
      content: '优蚁环保网讯：按照环保部要求，广东省环保厅派出精兵强将参加“2+26城市大气强化督查”。根据安排，由广东省环保厅及部分市环保局派出的杜华明、梁连根、欧兆迎、张翼超等16位同志，组成的第二轮次第3督查组、第三轮次第9督查组，分别在河北省石家庄市、邢台市开展大气强化督查......',
      DetailLast: '揭阳：为扬尘污染套上紧箍咒',
      DetailNext: '督察进行时| 中央环保督察二十天......'
    }
  }
}
</script>
