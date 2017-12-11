"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_ctrl_1 = require("../controllers/auth.ctrl");
const router = express_1.Router();
router
    .get('/refresh', auth_ctrl_1.refresh)
    .post('/login', auth_ctrl_1.login);
exports.default = router;
