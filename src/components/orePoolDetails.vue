矿池详情

<template>
  <div class="orePoolDetails">
    <!-- <div>
      信息
    </div> -->
    <div>
      <h2>矿池详情</h2>
      <table class="table s1">
        <tr>
          <td>地址</td>
          <td>容量</td>
          <td>质押金额</td>
          <td>加入矿池时间</td>
        </tr>
        <tr v-for="info in data.infoList">
          <td>{{info.addr}}</td>
          <td>{{info.capacity}}</td>
          <td>{{info.money}}</td>
          <td>{{info.time}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<style lang="scss">
  h2{
    font-size:2rem;
    text-align: center;
  }
</style>
<script>
export default {
  data(){
    return {
      data:{
        infoList:[],
      }
    }
  },
  async mounted(){
    this.$data.data.infoList = this.$route.params.infoList
  },
}
</script>