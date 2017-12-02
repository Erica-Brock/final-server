"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const create = (poster, reciever, review) => {
    return base_proc_1.row('spInsertReview', [poster, reciever, review]);
};
const read = (id) => {
    return base_proc_1.row('spGetReview', [id]);
};
const update = (poster_id, reciever, review) => {
    return base_proc_1.empty('spUpdateReview', [poster_id, reciever, review]);
};
const destroy = (id, poster) => {
    return base_proc_1.empty('spDeleteReview', [id, poster]);
};
const all = () => {
    return base_proc_1.rows('spGetReviews');
};
const allPoster = (poster_id) => {
    return base_proc_1.rows('spGetReviewsByPoster', [poster_id]);
};
const allReceiver = (receiver_id) => {
    return base_proc_1.rows('spGetReviewsByPoster', [receiver_id]);
};
exports.default = {
    create,
    read,
    update,
    destroy,
    all,
    allPoster,
    allReceiver
};
