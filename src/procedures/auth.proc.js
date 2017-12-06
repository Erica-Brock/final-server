"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const login = (email) => {
    return base_proc_1.row('spGetUserByEmail', [email]);
};
exports.default = {
    login
};
