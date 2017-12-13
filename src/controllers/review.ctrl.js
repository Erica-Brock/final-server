"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const review_proc_1 = require("../procedures/review.proc");
exports.create = (req, res, next) => {
    review_proc_1.default.create(req.body.clientId, req.body.providerId, +req.body.rating, req.body.review)
        .then((set) => {
        res.json(set);
    });
};
exports.read = (req, res, next) => {
    review_proc_1.default.read(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.update = (req, res, next) => {
    review_proc_1.default.update(+req.params.id, req.body.poster, req.body.review)
        .then((sets) => {
        res.json(sets);
    });
};
exports.destroy = (req, res, next) => {
    review_proc_1.default.destroy(+req.params.id, req.body.poster)
        .then((sets) => {
        res.json(sets);
    });
};
exports.all = (req, res, next) => {
    review_proc_1.default.all()
        .then((sets) => {
        res.json(sets);
    });
};
exports.allByProvider = (req, res, next) => {
    review_proc_1.default.allByProvider(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.allReceiver = (req, res, next) => {
    review_proc_1.default.allReceiver(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.allByJob = (req, res, next) => {
    review_proc_1.default.allByJob(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
