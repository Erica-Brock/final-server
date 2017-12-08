"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_ctrl_1 = require("../controllers/auth.ctrl");
const auth_1 = require("../middleware/auth");
const router = express_1.Router();
router
    .post('/login', auth_ctrl_1.login)
    .get('/test', auth_1.authenticate, auth_ctrl_1.test);
exports.default = router;
