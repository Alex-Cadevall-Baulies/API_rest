const express = require('express');
const router = express.Router()

const multer = require("multer");
const upload = multer({ dest: './views/images'});

router.get('/', function (req, res) {
    res.render('index.ejs');
  });

router.post('/', upload.single('image'), (req, res) =>{
  console.log(req.file.filename);
  res.send(201)
})

module.exports = router