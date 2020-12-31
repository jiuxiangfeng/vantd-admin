<template>
  <div class><a
      href="#"
      class='logout'
      @click.prevent="handle"
    >注销</a></div>
</template>

<script>
import { RemoveToken } from '@/utils/token'
export default {
  methods: {
    handle() {
      RemoveToken()
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style lang="less" scoped>
.logout {
  font-size: 14px;
  display: inline-block;
  width: 100%;
  text-align: center;
  color: #777;
}
</style>
