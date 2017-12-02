import { row, rows, empty } from './base.proc';
const create = (poster:string, reciever:string, review:string)=> {
    return row('spInsertReview', [poster, reciever, review ]);
};
const read = (id:number)=>{
    return row('spGetReview',[id]);
};
const update = (poster_id:number, reciever:string, review:string)=>{
    return empty('spUpdateReview',[poster_id, reciever, review ]);
};
const destroy = (id:number, poster:string)=>{
    return empty('spDeleteReview', [id, poster]);
};
const all = ()=>{
    return rows('spGetReviews');
};
const allPoster = (poster_id:number)=>{
    return rows('spGetReviewsByPoster',[poster_id]);
};
const allReceiver = (receiver_id:number)=>{
    return rows('spGetReviewsByPoster',[receiver_id]);
};

export default {
create,
read,
update,
destroy,
all,
allPoster,
allReceiver
}