const mongoose = require('mongoose')
const Scheme = mongoose.Schema
const model = mongoose.model

// 管理员表
const userScheme = new Scheme({
  account:  {type:String, require:true},
  password:  {type:String, require:true}
})
const user = model('user', userScheme)

module.exports = {
  user
}