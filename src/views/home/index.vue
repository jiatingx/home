/** @create:Justin 2021-01-24 */
<template lang="pug">
van-button(type="primary" @click="test") 主要按钮
<i-inbox-success theme="outline" size="32" fill="#333" :strokeWidth="1"/>
</template>

<script>
import { reactive, toRefs } from 'vue' // eslint-disable-line
export default {
  name: '',
  setup() {
    const test = () => {
      console.log(_.defaults({ a: 1 }, { a: 3, b: 2 }))
    }

    return {
      test
    }
  }
}
</script>

<style lang="scss" scoped></style>
