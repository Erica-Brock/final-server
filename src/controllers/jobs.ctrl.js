"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const job_proc_1 = require("../procedures/job.proc");
exports.create = (req, res, next) => {
    job_proc_1.default.create(+req.body.client_id, +req.body.provider_id, req.body.title, req.body.description)
        .then((sets) => {
        res.json(sets);
    });
};
exports.read = (req, res, next) => {
    job_proc_1.default.read(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.update = (req, res, next) => {
    job_proc_1.default.update(+req.params.id, req.body.provider, req.body.title, req.body.description)
        .then((sets) => {
        res.json(sets);
    });
};
exports.destroy = (req, res, next) => {
    job_proc_1.default.destroy(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.all = (req, res, next) => {
    job_proc_1.default.all()
        .then((sets) => {
        res.json(sets);
    });
};
exports.getImagesByJob = (req, res, next) => {
    job_proc_1.default.getImagesByJob(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
