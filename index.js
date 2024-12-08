const path = require('path')
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

const app = express()
const port = 3000
const host = 'http://localhost'

// Models
const ProductModel = require('./models/product')


mongoose.connect('mongodb://localhost/shop_db').then((response) => {
    console.log('connected to mongodb');
}).catch((error) => {
    console.error(error);
});

app.set('views', path.join((__dirname, 'views')))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/products', async (req, res) => {
    const {size} = req.query
    if (size) {
        const products = await ProductModel.find({size})
        return res.render('products/index', {products, size})
    } else {
        const products = await ProductModel.find()
        res.render('products/index', {products, size: 'All'})
    }
})
app.get('/products/create', (req, res) => {
    res.render('products/create')
})

app.post('/products', async (req, res) => {
    const product = new ProductModel(req.body)
    await product.save()
    res.redirect('/products')
})

app.get('/products/:id', async (req, res) => {
    const {id} = req.params
    const product = await ProductModel.findById(id)
    res.render('products/show', {product})
})

app.get('/products/:id/edit', async (req, res) => {
    const {id} = req.params
    const product = await ProductModel.findById(id)
    res.render('products/edit', {product})
})

app.put('/products/:id', async (req, res) => {
    const {id} = req.params
    await ProductModel.findByIdAndUpdate(id, req.body, {runValidators: true})
    res.redirect('/products')

})

app.delete('/products/:id', async (req, res) => {
    const {id} = req.params
    await ProductModel.findByIdAndDelete(id)
    res.redirect('/products')
})

app.listen(port, () => {
    console.log(`shop app listening on ${host}:${port}`);
})
