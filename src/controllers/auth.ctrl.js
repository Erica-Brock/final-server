"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_proc_1 = require("../procedures/auth.proc");
const lodash_1 = require("lodash");
const bcrypt_1 = require("../middleware/bcrypt");
exports.login = (req, res, next) => {
    auth_proc_1.default.login(req.body.email)
        .then((user) => {
        if (lodash_1.isNil(user) || !bcrypt_1.comparePassword(user.password, req.body.password)) {
            throw new Error();
        }
        req.session.userid = user.id;
        delete user.password;
        res.send(user);
    });
};
