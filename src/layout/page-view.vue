<template>
  <div class="page-view"
       :class="{'page-view-up':headerHidden}">
    <div class="viewTop"></div>
    <div :class="{'content-main':true}">
      <transition name="bounce">
        <keep-alive :include="includeCache">
          <router-view v-if="!isReload"
                       :key="$route.Path"></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>

</template>

<script>
export default {
  props: ['headerHidden', 'isReload', 'includeCache'],
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.page-view {
  position: absolute;
  width: 100%;
  top: 100px;
  bottom: 20px;
  margin: auto;
  transition: all 0.3s;
  -moz-transition: all 0.3s; /* Firefox 4 */
  -webkit-transition: all 0.3s; /* Safari 和 Chrome */
  -o-transition: all 0.3s; /* Opera */
  .viewTop {
    position: absolute;
    top: 0;
    left: 16px;
    right: 16px;
    margin: auto;
    height: 5px;
    background-color: #fff;
    z-index: 1;
  }
}
.page-view-up {
  top: 40px;
}
.content-main {
  position: absolute;
  padding: 10px 16px;
  height: 100%;
  width: 100%;
  top: 0;
  // bottom: 20px;
  // margin: auto;
  background-color: #fff;
  overflow: auto;
}

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
</style>
