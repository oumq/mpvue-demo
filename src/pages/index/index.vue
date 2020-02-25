<template>
  <div class="content">
    <div class="rollUpContent">
      <roll-up ref="rollup"></roll-up>
    </div>
    <van-button type="primary" @click="start">go ！</van-button>
  </div>
</template>

<script>
import rollUp from '@/components/rollUp'
export default {
  data () {
    return {}
  },
  components: {
    rollUp
  },
  methods: {
    start () {
      this.$refs.rollup.start()
    }
  },
  created () {}
}
</script>

<style scoped>
.content {
  position: fixed;
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.rollUpContent {
  width: 400rpx;
  height: 200rpx;
  margin-bottom: 30rpx;
}
</style>
