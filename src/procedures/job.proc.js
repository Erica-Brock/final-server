"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const create = (client_id, provider_id, title, description, location, isAccepted = 0b00, isCompleted = 0b00) => {
    return base_proc_1.row('spInsertJob', [client_id, provider_id, title, description, location, isAccepted, isCompleted]);
};
const read = (id) => {
    return base_proc_1.row('spGetJob', [id]);
};
const update = (id, client_id, provider_id, title, description, location, isAccepted = 0b00, isCompleted = 0b00) => {
    return base_proc_1.empty('spUpdateJob', [id, client_id, provider_id, title, description, location, isAccepted, isCompleted]);
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
const book = (id, provider_id) => {
    return base_proc_1.row('spBookJob', [id, provider_id]);
};
const complete = (id) => {
    return base_proc_1.empty('spCompleteJob', [id]);
};
exports.default = {
    create,
    read,
    update,
    destroy,
    all,
    getImagesByJob,
    book,
    complete
};
