const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

//basic info for main page
app.get('/', (req, res) => {
    res.send(`Go to /user for json \n Go to /upload for image`)
})

//req = incoming data, res = outgoing data
const user = require('./routes/user');
app.use("/user", user)

app.listen(port, () =>console.log(`Running on http://localhost:${port}/user`))