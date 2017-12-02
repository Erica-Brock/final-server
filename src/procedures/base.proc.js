"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../config/db/index");
exports.rows = (procedureName, args = []) => {
    return index_1.procedure(procedureName, args)
        .then((rows) => {
        return rows[0];
    });
};
exports.row = (procedureName, args = []) => {
    return index_1.procedure(procedureName, args)
        .then((rows) => {
        return rows[0][0];
    });
};
exports.empty = (procedureName, args = []) => {
    return index_1.procedure(procedureName, args)
        .then(() => {
        return;
    });
};
