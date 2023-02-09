/**
 * 模块1
 */

const express = require('express')
const router = express.Router()
const multer = require('multer');
// 参数dest指定文件存储路径
const upload = multer({ dest: 'public/uploads'})
const fs = require('fs')
const user = require('../../model/index')

/**
 * 在此处写路由实现
 */
// 文件传过来没有文件后缀，添加后缀
const renameFile = (file) => {
    let oldPath = file.destination + '/' + file.filename;
    let newPath = `./public/uploads/${file.filename}.png`;
    fs.rename(oldPath, newPath, function (err) {
        if (err) {
            throw err;
        }
    });
}

// upload.single('uploads')中uploads是文件的储存文件夹, 同时文件的上传字段也得是这个uploads，不然服务器就会报500错误
router.post('/change', upload.single('uploads'), async (req, res) => {
    const oldpassword = req.query.oldpassword
    const newpassword = req.query.newpassword
    let admin = await user.find({ password: oldpassword })
    if (admin.length === 0) {
        res.send('原密码错误')
    } else {
        let updata = await user.updateOne({ "account": admin[0].account }, { $set: { "password": newpassword } })
        res.send('密码修改成功')
    }
})

router.post('/newPic', upload.single('uploads'), async function (req, res) {
    const file = req.file;
    renameFile(file)
    res.send('文件存储成功')
})
module.exports = router