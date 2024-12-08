const path = require('path')
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3000
const host = 'http://localhost'

mongoose.connect('mongodb://localhost/shop_db').then((response) => {
    console.log('connected to mongodb');
}).catch((error) => {
    console.error(error);
});

app.set('views', path.join((__dirname, 'views')))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`shop app listening on ${host}:${port}`);
})
