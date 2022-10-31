const express = require('express');
const router = express.Router()

const multer = require("multer");
const upload = multer({ dest: '../views/images'});

router.get('/', function (req, res) {
    res.render('index.ejs');
  });

router.post('/upload', upload.single('image'), (req, res) =>{

})

module.exports = router