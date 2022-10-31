const express = require('express');
const router = express.Router()
const app = express();

const changeURL = require('../helpers/jsonManager')
const userInfo = require('../user.json');

app.get('/', async (req, res) => {
    try {
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    await changeURL(fullUrl)
    
    res.json(userInfo)
    }
    catch (err) {console.log(err)}
})



module.exports = router