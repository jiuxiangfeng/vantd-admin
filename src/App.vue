<template>
  <a-config-provider :locale="locale">
    <div id='app'>
      <transition name="bounce">
        <router-view></router-view>
      </transition>
    </div>
  </a-config-provider>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  data() {
    return {
      locale: zhCN
    }
  }
}
</script>
<style lang="less" scoped>
#app {
  height: 100%;
  width: 100%;
  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: translateX(-100%);
    }
    20% {
      transform: translateX(-100%);
    }
    // 50% {
    //   transform: translateX(-50%);
    // }
    100% {
      transform: translateX(0);
    }
  }
}
</style>
