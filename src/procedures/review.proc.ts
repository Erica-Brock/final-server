import { row, rows, empty } from './base.proc';
const create = (id:number)=> {
    return row('spInsertReview', [id]);
};
const read = (id:number)=>{
    return row('spGetReview',[id]);
};
const update = (id:number)=>{
    return empty('spUpdateReview',[id]);// will need to add other parameters when we get them
};
const destroy = (id:number)=>{
    return empty('spDeleteReview', [id]);
};
const all = ()=>{
    return rows('spGetReviews');
};

export default {
create,
read,
update,
destroy,
all,
}