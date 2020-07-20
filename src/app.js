const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// Connecta ao banco
mongoose.connect("mongodb://guilherme:g123456@ds012889.mlab.com:12889/ndstr", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

// Carrega os Models
const Product = require('./models/product');

// Carrega as Rotas
const index = require("./routes/index-route");
const products = require("./routes/products-route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", index);
app.use("/products", products);

module.exports = app;
