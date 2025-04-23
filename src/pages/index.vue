<template>
  <div>
    <orePoolList/>
  </div>
</template>

<script>
// 使用node上的全局变量
global.log = console.log
global.dir = console.dir

import orePoolList from '~/components/orePoolList.vue'

export default {
  // 使用网页上的全局变量
  // app.log(111)
  mounted(){
  },
  components: {
    orePoolList
  }
}
</script>