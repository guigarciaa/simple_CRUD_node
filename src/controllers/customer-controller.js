"use strict";

const validationContract = require("../validators/fluent-validator");
const repository = require("../repositories/customer-repository");
const md5 = require("md5");
const emailService = require("../services/email-services");

exports.get = async (req, res, next) => {
    try {
        let data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.post = async (req, res, next) => {
    let contract = new validationContract();
    contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracteres.');
    contract.isEmail(req.body.email, 'E-mail invalido.');
    contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 6 caracteres.');

    // If datas are invalids
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });

        emailService
            .send(req.body.email,
                'Bem vindo ao Node Store',
                global.EMAIL_TMPL.replace("{0}", req.body.name));

        res.status(201).send({ message: "Cliente cadastrado com sucesso!" });
    } catch (e) {
        res
            .status(500)
            .send({ message: "Falha ao cadastrar o cliente!", data: e });
    }

};