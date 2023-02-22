<template>
  <div class="box">
    <div class="item">
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  created () {
    // 定时器十秒后自动返回首页
  }
}
</script>

<style lang="scss" scoped>
.box{
  // text-align:;
  width: 100%;
  margin: 20rem 35rem;
  .item {
    margin: 0 auto;
    height: 100vh;
    width: 100%;
    background-image: url(@/assets/404.png);
    background-repeat: no-repeat;
  }
}
</style>
