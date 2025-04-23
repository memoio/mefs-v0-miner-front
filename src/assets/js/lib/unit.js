// 单位
let unit = {
  // 数据
  data:{
    // 转换为最大单位
    // @param {string} num 要转换的数据
    // @param {string} unit 当前单位 默认:B
    // @return {string}
    toMax(num,unit = 'B'){
      num = parseInt(num)
      if(num === 0){
        return '0 B'
      }
      num = this.toMin(num,unit)
      let k = 1024
      let sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
      let i = Math.floor(Math.log(num) / Math.log(k))
      let res = (num / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i]
      return res
    },
    // 格式化为 B
    toMin(num,unit = 'B'){
      switch(unit.toUpperCase()){
        case 'KB':num = num * 1024 ** 1; break;
        case 'MB':num = num * 1024 ** 2; break;
        case 'GB':num = num * 1024 ** 3; break;
        case 'TB':num = num * 1024 ** 4; break;
        case 'PB':num = num * 1024 ** 5; break;
        case 'EB':num = num * 1024 ** 6; break;
        case 'ZB':num = num * 1024 ** 7; break;
        case 'YB':num = num * 1024 ** 8; break;
      }

      return num
    },
    // 把 2.00 MB 格式化成 B
    format(data){
      let num = parseInt(data.substring(0,data.length-2).trim())
      let unit = data.substring(data.length-2,data.length)
      return this.toMin(num,unit)
    },
  }
}

module.exports = unit