"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const create = (name, password, email, city, state, phone, bio, img) => {
    return base_proc_1.row('spInsertUser', [name, password, email, city, state, phone, bio, img]);
};
const read = (id) => {
    return base_proc_1.row('spGetUser', [id]);
};
const update = (id, name, password, email, city, state, phone, bio, img) => {
    return base_proc_1.empty('spUpdateUser', [id, name, password, email, city, state, phone, bio, img]);
};
const destroy = (id) => {
    return base_proc_1.empty('spDeleteUser', [id]);
};
const all = () => {
    return base_proc_1.rows('spGetUsers');
};
const getJobsByClient = (client_id) => {
    return base_proc_1.rows('spGetJobsByClient', [client_id]);
};
const getJobsByProvider = (provider_id) => {
    return base_proc_1.rows('spGetJobsByProvider', [provider_id]);
};
const getSkillsByUser = (user_id) => {
    return base_proc_1.rows('spGetSkillsByUser', [user_id]);
};
const getImagesByUser = (user_id) => {
    return base_proc_1.rows('spGetImagesByUser', [user_id]);
};
exports.default = {
    create,
    read,
    update,
    destroy,
    all,
    getJobsByClient,
    getJobsByProvider,
    getSkillsByUser,
    getImagesByUser
};
