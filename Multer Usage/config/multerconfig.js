const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

//diskstorage
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/images/uploads')
    },
    filename: function(req, file, cb){
        crypto.randomBytes(12, function(err, name) {
            const filename = name.toString('hex') + path.extname(file.originalname)
            cb(null, filename)  
        })
    }
})

//upload variable
const upload = multer({storage: storage})

//export the module
module.exports = upload;