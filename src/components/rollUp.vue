<template>
  <div class="content">
    <div
      class="rollup"
      :style="{
      'transform': 'translateY(-' + yValue + 'rpx)',
      'transition-duration': time + 's',
      'transition-timing-function': timingFunction}"
    >
      <div class="label" v-for="(item, index) in loopList" :key="index">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loopList () {
      let newList = []
      for (let i = 0; i < 2; i++) {
        this.list.forEach(item => {
          newList.push(item)
        })
      }
      return newList
    }
  },
  data () {
    return {
      yValue: 0,
      time: 3,
      timingFunction: 'ease-in-out',
      list: [
        '麦当劳',
        '肯德基',
        '必胜客',
        '豪客来',
        '富升记',
        '潮福城',
        '望越',
        '太二酸菜鱼',
        '库达屋',
        '喜茶',
        'Koi',
        '吃屎去吧你',
        '临家闽南菜',
        '闽和南',
        '宴遇'
      ]
    }
  },
  methods: {
    start () {
      this.yValue = 0
      this.time = 0.2
      this.timingFunction = 'linear'
      setTimeout(() => {
        let num = parseInt(Math.random() * (this.list.length) + 0)
        this.yValue = (this.list.length * 1 + num) * 200
        this.time = 3
        this.timingFunction = 'ease'
      }, 700)
    }
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  border: 1px solid black;
  overflow: hidden;
}
.label {
  position: relative;
  width: 100%;
  height: 200rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rollup {
  position: relative;
}
</style>