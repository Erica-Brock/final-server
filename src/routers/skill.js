"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const skills_ctrl_1 = require("../controllers/skills.ctrl");
const router = express_1.Router();
router
    .get('/', skills_ctrl_1.all)
    .get('/:id', skills_ctrl_1.read)
    .get('/user/:id', skills_ctrl_1.getUserBySkills)
    .post('/', skills_ctrl_1.create)
    .post('/:id', skills_ctrl_1.insertUserSkill)
    .put('/:id', skills_ctrl_1.update)
    .delete('/:id', skills_ctrl_1.destroy)
    .delete('/skill/:id', skills_ctrl_1.deleteUserSkill);
exports.default = router;
