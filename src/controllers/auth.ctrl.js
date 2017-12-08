"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_proc_1 = require("../procedures/auth.proc");
const lodash_1 = require("lodash");
exports.login = (req, res, next) => {
    auth_proc_1.default.login(req.body.email)
        .then((user) => {
        console.log('user', user);
        if (lodash_1.isNil(user)) {
            throw new Error('User was not found');
        }
        if (user.password !== req.body.password) {
            throw new Error('Password does not match');
        }
        req.session.userid = user.id;
        console.log(req.session);
        delete user.password;
        res.send(user);
    });
};
