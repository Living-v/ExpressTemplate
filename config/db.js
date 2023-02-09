const mongoose = require('mongoose')

module.exports = async app => {
  /**
   * 如需使用账号密码连接数据库
   */
  // mongoose.connect('mongodb://root:express@127.0.0.1:27017/express?authSource=admin', {useNewUrlParser:true, useUnifiedTopology:true},(err)=>{
  //   if(err){
  //     console.log(err);
  //     return
  //   }
  //   console.log('mongodb connect');
  // })
  // .then(x => {
  //   console.log(
  //       `Connected to Mongo! Database name: "${x.connections[0].name}"`,
  //     );
  // })
  // .catch(err => {
  //     console.error('Error connecting to mongo', err);
  // });
  /**
 * 不需使用账号密码连接数据库
 */
  mongoose.connect('mongodb://localhost/express', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function (error) {
    if (error) {
      console.log("数据库连接失败,或许是数据库没有开启,详情参考报错信息:")
      console.log(error);
    } else {
      console.log("数据库连接成功")
    }
  })
}