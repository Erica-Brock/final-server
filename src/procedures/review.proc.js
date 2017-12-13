"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const create = (client_id, job_id, provider_id, rating, review) => {
    return base_proc_1.row('spInsertReview', [client_id, job_id, provider_id, rating, review]);
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
const allByProvider = (provider_id) => {
    return base_proc_1.rows('spGetReviewsByProvider', [provider_id]);
};
const allReceiver = (receiver_id) => {
    return base_proc_1.rows('spGetReviewsByPoster', [receiver_id]);
};
const allByJob = (job_id) => {
    return base_proc_1.rows('spGetReviewsByJob', [job_id]);
};
exports.default = {
    create,
    read,
    update,
    destroy,
    all,
    allByProvider,
    allReceiver,
    allByJob
};
