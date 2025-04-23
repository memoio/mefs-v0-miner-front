矿池列表

<template>
  <div class="orePoolList">
    <div>
      全网质押总量: {{pledgeSum}}
    </div>
    <div>
      <h1>矿池列表</h1>
    </div>
    <div>
      <table class="table s1">
        <tr>
          <td>地址</td>
          <td>容量</td>
          <td>详情</td>
        </tr>
        <tr v-for="info in data.infoList">
          <td>{{info.keeper.addr}}</td>
          <td>{{info.keeper.capacity}}</td>
          <td><nuxt-link :to="{name:'orePoolDetails',params:{infoList:info.providerList}}">详情</nuxt-link></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<style lang="scss">
  h1{
    font-size:2rem;
    text-align: center;
  }
</style>
<script>
let cl = {
  main(res){
    // 把数据格式化成显示的格式
    /*
      [
        {
          keeper:{
            addr:'',
            capacity:'',
          },
          providerList:[
            {
              addr:'',
              capacity:'',
              money:'',
              time:'2019-09-06 12:22:00',
            },
          ],
        },
      ]
    */
    let data = []
    for(let k of res.data){
      let kc = 0
      let providerList = []
      for(let p of k.providerList){
        kc += parseInt(p.size)
        providerList.push({
          addr:p.addr,
          capacity:p.size,
          money:p.money,
          time:app.time.format(p.time+'000'),
        })
      }
      
      data.push({
        keeper:{
          addr:k.addr,
          capacity:kc,
        },
        providerList:providerList,
      })
    }
    // 给容量加上单位
    for(let k of data){
      k.keeper.capacity = app.unit.data.toMax(k.keeper.capacity,'mb')
      for(let p of k.providerList){
        p.capacity = app.unit.data.toMax(p.capacity,'mb')
      }
    }

    return data
  }
}

export default {
  async beforeCreate(){
    let res = await app.back.get('/list')
    res = cl.main(res)
    this.$data.data.infoList = res

    let sum = 0
    for(let o of res){
      sum += app.unit.data.format(o.keeper.capacity)
    }
    this.$data.pledgeSum = app.unit.data.toMax(sum)
  },
  data(){
    return {
      data:{
        infoList:[],
      },
      pledgeSum:'',
    }
  },
}
</script>