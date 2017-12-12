"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_ctrl_1 = require("../controllers/users.ctrl");
const router = express_1.Router();
router
    .get('/', users_ctrl_1.all)
    .get('/jobs/posted/:id', users_ctrl_1.getJobsByClient)
    .get('/jobs/accepted/:id', users_ctrl_1.getJobsByProvider)
    .get('/skills/:id', users_ctrl_1.getSkillsByUser)
    .get('/images/:id', users_ctrl_1.getImagesByUser)
    .get('/refreshIndex', users_ctrl_1.refresh)
    .get('/:id', users_ctrl_1.read)
    .post('/', users_ctrl_1.create)
    .put('/:id', users_ctrl_1.update)
    .delete('/:id', users_ctrl_1.destroy);
exports.default = router;
