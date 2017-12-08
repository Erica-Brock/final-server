"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const review_ctrl_1 = require("../controllers/review.ctrl");
const router = express_1.Router();
router
    .get('/', review_ctrl_1.all)
    .get('/:id', review_ctrl_1.read)
    .get('/poster/:id', review_ctrl_1.allPoster)
    .get('/receiver/:id', review_ctrl_1.allReceiver)
    .post('/', review_ctrl_1.create)
    .put('/', review_ctrl_1.update)
    .delete('/', review_ctrl_1.destroy);
exports.default = router;
