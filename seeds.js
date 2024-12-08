const mongoose = require('mongoose')
const ProductModel = require('./models/product')

mongoose.connect('mongodb://localhost/shop_db').then((response) => {
    console.log('connected to mongodb');
}).catch((error) => {
    console.error(error);
});

const seedProducts = [
    {
        "name": "Kemeja Flanel",
        "brand": "Hollister",
        "price": 750000,
        "color": "biru muda",
        "size": "M"
    },
    {
        "name": "Celana Chino",
        "brand": "Levi's",
        "price": 900000,
        "color": "krem",
        "size": "L"
    },
    {
        "name": "Sweater",
        "brand": "Gap",
        "price": 650000,
        "color": "merah muda",
        "size": "M"
    },
    {
        "name": "Sepatu Sneakers",
        "brand": "Nike",
        "price": 1200000,
        "color": "putih",
        "size": "L"
    },
    {
        "name": "Tas Ransel",
        "brand": "Herschel",
        "price": 1500000,
        "color": "biru",
        "size": "M"
    },
    {
        "name": "Kacamata Aviator",
        "brand": "Ray-Ban",
        "price": 2000000,
        "color": "emas",
        "size": "M"
    },
    {
        "name": "Baju Renang",
        "brand": "Speedo",
        "price": 500000,
        "color": "biru tua",
        "size": "XL"
    },
    {
        "name": "Topi Baseball",
        "brand": "New Era",
        "price": 350000,
        "color": "hitam",
        "size": "M"
    },
    {
        "name": "Rompi",
        "brand": "Zara",
        "price": 850000,
        "color": "abu-abu",
        "size": "M"
    },
    {
        "name": "Jas",
        "brand": "Hugo Boss",
        "price": 4500000,
        "color": "hitam",
        "size": "L"
    },
    {
        "name": "Sepatu Loafers",
        "brand": "Gucci",
        "price": 8000000,
        "color": "coklat",
        "size": "M"
    }
]

ProductModel.insertMany(seedProducts).then((response) => {
    console.log(response);
}).catch((error) => {
    console.error(error);
});