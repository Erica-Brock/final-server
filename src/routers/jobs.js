"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jobs_ctrl_1 = require("../controllers/jobs.ctrl");
const router = express_1.Router();
router
    .get('/', jobs_ctrl_1.all)
    .get('/images/:id', jobs_ctrl_1.getImagesByJob)
    .get('/refreshIndex', jobs_ctrl_1.refresh)
    .get('/:id', jobs_ctrl_1.read)
    .post('/', jobs_ctrl_1.create)
    .put('/book', jobs_ctrl_1.book)
    .put('/:id', jobs_ctrl_1.update)
    .delete('/:id', jobs_ctrl_1.destroy);
exports.default = router;
