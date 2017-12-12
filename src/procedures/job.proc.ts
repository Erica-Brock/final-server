import { row, rows, empty } from './base.proc';

const create = (client_id: number, provider_id: number, title: string, description: string, location: string, isAccepted = 0b00, isCompleted = 0b00)=> {
    return row('spInsertJob', [client_id, provider_id, title, description, location, isAccepted, isCompleted]);
};

const read = (id: number)=>{
    return row('spGetJob',[id]);
};

const update = (id: number, client_id: number, provider_id: number, title: string, description: string, location: string, isAccepted = 0b00, isCompleted = 0b00)=>{
    return empty('spUpdateJob',[id, client_id, provider_id, title, description, location, isAccepted, isCompleted]);
};

const destroy = (id: number)=>{
    return empty('spDeleteJob', [id]);
};

const all = ()=>{
    return rows('spGetJobs');
};

const getImagesByJob = (id: number)=>{
    return rows('spGetImagesByJob', [id]);
};

const book = (id: number, provider_id: number) => {
    return row('spBookJob', [id, provider_id]);
};

export default {
    create,
    read,
    update,
    destroy,
    all,
    getImagesByJob,
    book
}