'use strict';
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async () => {
    return await Order.find({}).populate('user');
};

exports.create = async (data) => {
    var order = new Order(data);
    await order.save()
};