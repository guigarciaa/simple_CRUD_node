'use strict';
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = async () => {
    return await
        Customer.find({});
};

exports.create = async (data) => {
    var customer = new Customer(data);
    await customer.save();
};

exports.authenticate = async (data) => {
    return await
        Customer.findOne({
            email: data.email,
            password: data.password
        });
};

exports.getById = async (id) => {
    return await
        Customer.findById(id);
};