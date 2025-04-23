let log = console.log
let dir = console.dir

let global = window

let obj = require('./lib/object')

function dq(key){
  return document.querySelector(key)
}
function dqa(key){
  return document.querySelectorAll(key)
}
Element.prototype.q = function(key){
  return this.querySelector(key)
}
Element.prototype.qa = function(key){
  return this.querySelectorAll(key)
}

obj.copyAttr(global,{
  log,dir,
  obj,
  dq,dqa,
})
global.app = {}

let unit = require('./lib/unit')
let time = require('./lib/time')

let axios = require('axios')
let config = require('./config')
let back = require('./back')

obj.copyAttr(global.app,{
  unit,time,
  axios,config,back,
})

// let page = require('./page/index')

// page.init()