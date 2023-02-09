const module1 = require("./module/module1")

module.exports = app =>{
  app.use('/module1', module1)
}