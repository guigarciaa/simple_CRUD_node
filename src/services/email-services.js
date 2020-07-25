'use strict';

const sendmail = require('sendmail')();

exports.send = async (to, subject, body) => {
    sendmail({
        from: 'no-reply@nodestore.com',
        to: to,
        subject: subject,
        html: body,
      }, function(err) {
        console.log(err && err.stack);
    });
}