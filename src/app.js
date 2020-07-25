const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require('./config');
const path = require("path");
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API Documentation
// var swaggerUi = require('swagger-ui-express'),
//     swaggerDocument = require('./swagger.json');
// app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Connecta ao banco
mongoose.connect(config.connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

// Return static files
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

// Carrega os Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// Carrega as Rotas
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/products-route");
const customerRoute = require("./routes/customer-route");
const orderRoute = require("./routes/order-route");

app.use("/", indexRoute);
app.use("/products", productRoute);
app.use("/customers", customerRoute);
app.use("/orders", orderRoute);

module.exports = app;
