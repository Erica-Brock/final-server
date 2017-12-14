"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_proc_1 = require("../procedures/auth.proc");
const lodash_1 = require("lodash");
exports.login = (req, res, next) => {
    auth_proc_1.default.login(req.body.email)
        .then((user) => {
        if (lodash_1.isNil(user)) {
            throw new Error('User was not found');
        }
        if (user.password !== req.body.password) {
            throw new Error('Password does not match');
        }
        req.session.userid = user.id;
        delete user.password;
        res.send(user);
    });
};
exports.refresh = (req, res, next) => {
    if (!req.session || !req.session.userid) {
        throw new Error('you must login cause you have no session');
    }
    auth_proc_1.default.refresh(req.session.userid)
        .then((userPacket) => {
        res.json(userPacket);
    });
};
