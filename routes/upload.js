const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  //Destination to store Image//
  destination: (req, file, cb) => {
    cb(null, 'Images/')
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + ' ' + file.originalname)
  },
})

const upload = multer({ storage: storage })

router.get('/', function (req, res) {
  res.render('upload')
})

router.post('/', upload.single('image'), (req, res) => {
  //console.log(req.file)
  console.log('POST')
  res.send('Image Uploaded')
})

module.exports = router
