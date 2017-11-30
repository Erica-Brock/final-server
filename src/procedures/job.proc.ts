import { row, rows, empty } from './base.proc';
    const create = (id:number)=> {
        return row('spInsertJob', [id]);
    };
    const read = (id:number)=>{
        return row('spGetJob',[id]);
    };
    const update = (id:number)=>{
        return empty('spUpdateJob',[id]);// will need to add other parameters when we get them
    };
    const destroy = (id:number)=>{
        return empty('spDeleteJob', [id]);
    };
    const all = ()=>{
        return rows('spGetJobs');
    };

export default {
    create,
    read,
    update,
    destroy,
    all,
}