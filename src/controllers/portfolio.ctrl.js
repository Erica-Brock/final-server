"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const portfolio_proc_1 = require("../procedures/portfolio.proc");
exports.create = (req, res, next) => {
    portfolio_proc_1.default.create(+req.body.user_id, req.body.job_id, req.body.image, req.body.description)
        .then((sets) => {
        res.json(sets);
    });
};
exports.read = (req, res, next) => {
    portfolio_proc_1.default.read(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.update = (req, res, next) => {
    portfolio_proc_1.default.update(+req.body.id, +req.body.user_id, req.body.job_id, req.body.image, req.body.description)
        .then((sets) => {
        res.json(sets);
    });
};
exports.destroy = (req, res, next) => {
    portfolio_proc_1.default.destroy(+req.params.id, +req.params.user_id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.all = (req, res, next) => {
    portfolio_proc_1.default.all()
        .then((sets) => {
        res.json(sets);
    });
};
