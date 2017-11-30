import {NextFunction, Response, Request} from 'express';
import { row, rows, empty } from './base.proc';
    const create = (id:number)=>{
        return row('spInsertUser',[id]);
    };
    const read = (id:number)=>{
        return row('spGetUser',[id]);
    };
    const update = (id:number)=>{
        return empty('spUpdateUser', [id]);
    };
    const destroy = (id:number)=>{
        return empty('spDeleteUser',[id]);
    };
    const all = ()=>{
        return rows('spGetUsers');
    };

export default {
    create,
    read,
    update,
    destroy,
    all,
}
