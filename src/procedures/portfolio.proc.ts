import { row, rows, empty } from './base.proc';
const create = (user_id:number, job_id:number, image:string, description:string)=> {
    return row('spInsertImage', [user_id, job_id, image, description]);
};
const read = (id:number)=>{
    return row('spGetImage',[id]);
};
const update = (id:number, user_id:number, job_id:number, image:string, description:string)=>{
    return empty('spUpdateImage',[id, user_id, job_id, image, description]);
};
const destroy = (id:number, user_id:number)=>{
    return empty('spDeleteImage', [id, user_id]);
};
const all = ()=>{
    return rows('spGetImages');
};

export default {
create,
read,
update,
destroy,
all,
}