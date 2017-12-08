"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_proc_1 = require("../procedures/user.proc");
exports.create = (req, res, next) => {
    user_proc_1.default.create(+req.params.id, req.body.name, req.body.password, req.body.email, req.body.city, req.body.state, req.body.phone, req.body.bio, req.body.img)
        .then((sets) => {
        res.json(sets);
    });
};
exports.read = (req, res, next) => {
    user_proc_1.default.read(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.update = (req, res, next) => {
    user_proc_1.default.update(+req.params.id, req.body.name, req.body.password, req.body.email, req.body.city, req.body.state, req.body.phone, req.body.bio, req.body.img)
        .then((sets) => {
        res.json(sets);
    });
};
exports.destroy = (req, res, next) => {
    user_proc_1.default.destroy(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.all = (req, res, next) => {
    user_proc_1.default.all()
        .then((sets) => {
        const result = sets.map((s) => {
            s.skills = s.skills.split(',');
            return s;
        });
        res.json(result);
    });
};
exports.getJobsByClient = (req, res, next) => {
    user_proc_1.default.getJobsByClient(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.getJobsByProvider = (req, res, next) => {
    user_proc_1.default.getJobsByProvider(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.getSkillsByUser = (req, res, next) => {
    user_proc_1.default.getSkillsByUser(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.getImagesByUser = (req, res, next) => {
    user_proc_1.default.getImagesByUser(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
