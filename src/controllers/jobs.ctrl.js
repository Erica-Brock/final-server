"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../config/db/index");
const job_proc_1 = require("../procedures/job.proc");
// import { client } from "../index";
const algoliasearch = require("algoliasearch");
const client = algoliasearch("NGFATQMT4B", "3c9872f8338b96966a9dab158cc77e70");
const index = client.initIndex('FinalJobs');
// EDITED TO CREATE A JOB AND INSERT IT INTO SQL AND THE ALGOLIA INDEX
exports.create = (req, res, next) => {
    index.addObject(req.body, (err, content) => {
        console.log(content);
        index_1.procedure("spInsertJob", [req.body.client_id, req.body.provider_id, req.body.title, req.body.description, req.body.location, req.body.status])
            .then((id) => {
            console.log(id[0][0].id);
            index.partialUpdateObject({
                id: id[0][0].id,
                objectID: content.objectID
            });
        });
    });
};
exports.read = (req, res, next) => {
    job_proc_1.default.read(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
//EDITED TO UPDATE A JOB AND INSERT IT INTO THE INDEX AND THE SQL DATABASE
exports.update = (req, res, next) => {
    index_1.procedure("spUpdateJob", [req.body.client_id, req.body.provider_id, req.body.title, req.body.description, req.body.location, req.body.status])
        .then((user) => {
        res.json(user);
        index_1.procedure("spGetJob", [+req.params.id])
            .then((user) => {
            console.log(user[0][0]);
            index.saveObject(Object.assign({}, user[0][0], { objectID: user[0][0].index_id }), (err, content) => {
                console.log(content);
            });
        });
    });
};
//EDITED TO DESTROY A JOB IN THE SQL AND IN THE INDEX
exports.destroy = (req, res, next) => {
    index_1.procedure("spGetJob", [+req.params.id])
        .then((job) => {
        console.log(job[0][0]);
        index.deleteObject(job[0][0].index_id, (err) => {
            if (!err) {
                console.log('success');
            }
        });
        index_1.procedure("spDeleteJob", [+job[0][0].id])
            .then((res) => {
            console.log('deleted');
        });
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
