"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const portfolio_ctrl_1 = require("../controllers/portfolio.ctrl");
const router = express_1.Router();
router
    .get('/', portfolio_ctrl_1.all)
    .get('/:id', portfolio_ctrl_1.read)
    .post('/', portfolio_ctrl_1.create)
    .put('/:id', portfolio_ctrl_1.update)
    .delete('/:id', portfolio_ctrl_1.destroy);
exports.default = router;
