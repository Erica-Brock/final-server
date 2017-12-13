import { row, rows, empty } from './base.proc';

const create = (client_id: number, job_id: number, provider_id: number, rating: number, review: string) => {
    return row('spInsertReview', [client_id, job_id, provider_id, rating, review]);
};
const read = (id: number) => {
    return row('spGetReview', [id]);
};
const update = (poster_id: number, reciever: string, review: string)=>{
    return empty('spUpdateReview',[poster_id, reciever, review]);
};
const destroy = (id: number, poster: string)=>{
    return empty('spDeleteReview', [id, poster]);
};
const all = () => {
    return rows('spGetReviews');
};
const allByProvider = (provider_id: number) => {
    return rows('spGetReviewsByProvider', [provider_id]);
};
const allReceiver = (receiver_id: number) => {
    return rows('spGetReviewsByPoster', [receiver_id]);
};

const allByJob = (job_id: number) => {
    return rows('spGetReviewsByJob', [job_id]);
};

export default {
    create,
    read,
    update,
    destroy,
    all,
    allByProvider,
    allReceiver,
    allByJob
};