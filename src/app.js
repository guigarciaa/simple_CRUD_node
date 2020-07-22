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
const Customer = require('./models/customer');
const Order = require('./models/order');

// Carrega as Rotas
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/products-route");
const customerRoute = require("./routes/customer-route");
const orderRoute = require("./routes/order-route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use("/products", productRoute);
app.use("/customers", customerRoute);
app.use("/orders", orderRoute);

module.exports = app;
