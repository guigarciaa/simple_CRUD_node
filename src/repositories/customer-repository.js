'use strict';
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = async () => {
    return await 
    Customer.find({}, 'number status customer items')
        .populate('customer', 'name')
        .populate('items.product', 'title');
};

exports.create = async (data) => {
    var customer = new Customer(data);
    await customer.save()
};