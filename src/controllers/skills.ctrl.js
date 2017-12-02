"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skills_proc_1 = require("../procedures/skills.proc");
exports.create = (req, res, next) => {
    skills_proc_1.default.create(req.body.skill)
        .then((sets) => {
        res.json(sets);
    });
};
exports.read = (req, res, next) => {
    skills_proc_1.default.read(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.update = (req, res, next) => {
    skills_proc_1.default.update(+req.params.id, req.body.provider, req.body.title, req.body.description)
        .then((sets) => {
        res.json(sets);
    });
};
exports.destroy = (req, res, next) => {
    skills_proc_1.default.destroy(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.deleteUserSkill = (req, res, next) => {
    skills_proc_1.default.deleteUserSkill(+req.params.id, +req.body.skill_id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.all = (req, res, next) => {
    skills_proc_1.default.all()
        .then((sets) => {
        res.json(sets);
    });
};
exports.getUserBySkills = (req, res, next) => {
    skills_proc_1.default.getUserBySkills(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.insertUserSkill = (req, res, next) => {
    skills_proc_1.default.insertUserSkill(+req.params.id, +req.body.skill_id)
        .then((sets) => {
        res.json(sets);
    });
};
