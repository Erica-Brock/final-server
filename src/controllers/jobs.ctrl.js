"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const job_proc_1 = require("../procedures/job.proc");
const algolia_mw_1 = require("../middleware/algolia.mw");
exports.create = (req, res, next) => {
    job_proc_1.default.create(req.body.client_id, req.body.provider_id, req.body.title, req.body.description, req.body.location, req.body.isAccepted, req.body.isCompleted)
        .then((job) => {
        algolia_mw_1.algoliaJobsIndex.add(job);
        res.json({
            id: job.id
        });
    });
};
exports.read = (req, res, next) => {
    job_proc_1.default.read(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.update = (req, res, next) => {
    const promises = [
        job_proc_1.default.update(req.params.id, req.body.client_id, req.body.provider_id, req.body.title, req.body.description, req.body.location, req.body.isAccepted, req.body.isCompleted),
        algolia_mw_1.algoliaJobsIndex.partialUpdate(Object.assign({}, req.body, { objectID: req.params.id }))
    ];
    Promise.all(promises)
        .then((results) => {
        console.log(results);
        res.end();
    })
        .catch((err) => {
        console.log(err);
    });
};
exports.destroy = (req, res, next) => {
    const promises = [
        job_proc_1.default.destroy(+req.params.id),
        algolia_mw_1.algoliaJobsIndex.delete(req.params.id)
    ];
    Promise.all(promises)
        .then((results) => {
        res.end();
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
exports.book = (req, res, next) => {
    job_proc_1.default.book(+req.body.id, +req.body.provider_id)
        .then((job) => {
        console.log(job);
    });
};
exports.refresh = (req, res, next) => {
    job_proc_1.default.all()
        .then((jobs) => {
        algolia_mw_1.algoliaJobsIndex.refresh(jobs)
            .then((ids) => {
            console.log('updated all jobs in algolia');
            res.end();
        });
    });
};
