"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const create = (skill) => {
    return base_proc_1.row('spInsertSkill', [skill]);
};
const read = (id) => {
    return base_proc_1.row('spGetSkill', [id]);
};
const update = (id, provider, title, description) => {
    return base_proc_1.empty('spUpdateSkill', [id, provider, title, description]);
};
const destroy = (id) => {
    return base_proc_1.empty('spDeleteSkill', [id,]);
};
const all = () => {
    return base_proc_1.rows('spGetSkills');
};
const deleteUserSkill = (user_id, skill_id) => {
    return base_proc_1.empty('spDeleteUserskill', [user_id, skill_id]);
};
const getUserBySkills = (user_id) => {
    return base_proc_1.row('spGetUserBySkills', [user_id]);
};
const insertUserSkill = (user_id, skill_id) => {
    return base_proc_1.row('spInsertUserskill', [user_id, skill_id]);
};
exports.default = {
    create,
    read,
    update,
    destroy,
    all,
    deleteUserSkill,
    getUserBySkills,
    insertUserSkill
};
