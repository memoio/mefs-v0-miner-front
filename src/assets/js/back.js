// 与后端交互
let axios= require('axios')
let config = require('./config')

let back = {
  async get(url){
    return new Promise((resolve, reject)=>{
      axios.get(config.backUrl + url)
        .then(res=>{
          resolve(res.data)
        }).catch(err=>{
          reject(err)
        })
      // resolve({"code":200,"data":[{"addr":"0x71EE63893E0778d05327FAd6E5F488af0770017A","providerList":[{"addr":"0xd1411b8252C9738c204b38b1d5a95C315b8d784A","money":"953674316406250","size":"1","time":"1568271974"},{"addr":"0x3230e1E9dEac42673e57D550A71dA3289c622E79","money":"953674316406250","size":"1","time":"1568272044"}]},{"addr":"0x94859bc5F700e1545F1e38149566b2F13E3dd7b8","providerList":[{"addr":"0x275f728F1ce929A29823944C2a83Ede5255d7Da3","money":"953674316406250","size":"1","time":"1568272051"},{"addr":"0x7a66CEd1a5de5BFCbce1Dc443015fA7Ab85164f0","money":"953674316406250","size":"1","time":"1568272057"}]}],"msg":"","success":true})
    })
  }
}

module.exports = back