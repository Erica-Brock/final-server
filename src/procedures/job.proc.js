"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const create = (client_id, provider_id, title, description) => {
    return base_proc_1.row('spInsertJob', [client_id, provider_id, title, description]);
};
const read = (id) => {
    return base_proc_1.row('spGetJob', [id]);
};
const update = (id, provider, title, description) => {
    return base_proc_1.empty('spUpdateJob', [id, provider, title, description]);
};
const destroy = (id) => {
    return base_proc_1.empty('spDeleteJob', [id]);
};
const all = () => {
    return base_proc_1.rows('spGetJobs');
};
const getImagesByJob = (id) => {
    return base_proc_1.rows('spGetImagesByJob', [id]);
};
exports.default = {
    create,
    read,
    update,
    destroy,
    all,
    getImagesByJob
};
