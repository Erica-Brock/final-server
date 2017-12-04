"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const saltRounds = 12;
exports.hashSaltPassword = (pw) => {
    return bcrypt.hashSync(pw, saltRounds);
};
exports.comparePassword = (pw, hash) => {
    return bcrypt.compareSync(pw, hash);
};
