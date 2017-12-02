"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const create = (user_id, job_id, image, description) => {
    return base_proc_1.row('spInsertImage', [user_id, job_id, image, description]);
};
const read = (id) => {
    return base_proc_1.row('spGetImage', [id]);
};
const update = (id, user_id, job_id, image, description) => {
    return base_proc_1.empty('spUpdateImage', [id, user_id, job_id, image, description]);
};
const destroy = (id, user_id) => {
    return base_proc_1.empty('spDeleteImage', [id, user_id]);
};
const all = () => {
    return base_proc_1.rows('spGetImages');
};
exports.default = {
    create,
    read,
    update,
    destroy,
    all,
};
