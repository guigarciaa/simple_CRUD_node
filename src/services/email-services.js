'use strict';
let config = require("../config");
let sendGrid = require('sendgrid')(config.sendgridKey);

exports.send = async (to, subject, body) => {
    sendGrid.send({
        to,
        from: "hello@nodestr.io",
        subject,
        html: body
    });
};