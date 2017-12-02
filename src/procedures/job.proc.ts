import { row, rows, empty } from './base.proc';
    const create = (client_id:number, provider_id:number, title:string, description:string)=> {
        return row('spInsertJob', [client_id, provider_id, title, description]);
    };
    const read = (id:number)=>{
        return row('spGetJob',[id]);
    };
    const update = (id:number, provider:string, title:string, description:string)=>{
        return empty('spUpdateJob',[id, provider, title, description]);
    };
    const destroy = (id:number)=>{
        return empty('spDeleteJob', [id]);
    };
    const all = ()=>{
        return rows('spGetJobs');
    };
    const getImagesByJob = (job_id:number)=>{
        return rows('spGetImagesByJob', [job_id]);
    };

export default {
    create,
    read,
    update,
    destroy,
    all,
    getImagesByJob
}