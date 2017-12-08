"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
exports.authenticate = (req, res, next) => {
    if (lodash_1.isEmpty(req.session) || lodash_1.isNil(req.session.userid)) {
        throw new Error('User is unauthenticated');
    }
    next();
};
