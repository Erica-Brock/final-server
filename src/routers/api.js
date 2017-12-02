"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jobs_1 = require("./jobs");
const review_1 = require("./review");
const user_1 = require("./user");
const skill_1 = require("./skill");
const portfolio_1 = require("./portfolio");
const express_1 = require("express");
const router = express_1.Router();
router
    .use('/jobs', jobs_1.default)
    .use('/reviews', review_1.default)
    .use('/users', user_1.default)
    .use('/skills', skill_1.default)
    .use('/images', portfolio_1.default);
exports.default = router;
