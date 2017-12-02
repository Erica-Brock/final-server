import {NextFunction, Response, Request} from 'express';
import { row, rows, empty } from './base.proc';
    const create = (id:number, name: string, password: string, email: string, city: string, state: string, phone: string, bio: string, img: string )=>{
        return row('spInsertUser',[id, name, password, email, city, state, phone, bio, img]);
    };
    const read = (id:number)=>{
        return row('spGetUser',[id]);
    };
    const update = (id:number, name: string, password: string, email: string, city: string, state: string, phone: string, bio: string, img: string )=>{
        return empty('spUpdateUser', [id, name, password, email, city, state, phone, bio, img]);
    };
    const destroy = (id:number)=>{
        return empty('spDeleteUser',[id]);
    };
    const all = ()=>{
        return rows('spGetUsers');
    };
    const getJobsByClient = (client_id:number)=>{
        return rows('spGetJobsByClient', [client_id]);
    };
    const getJobsByProvider= (provider_id:number)=>{
        return rows('spGetJobsByProvider',[provider_id]);
    };
    const getSkillsByUser= (user_id:number)=>{
        return rows('spGetSkillsByUser',[user_id]);
    };
    const getImagesByUser= (user_id:number)=>{
        return rows('spGetImagesByUser',[user_id]);
    };


export default {
    create,
    read,
    update,
    destroy,
    all,
    getJobsByClient,
    getJobsByProvider,
    getSkillsByUser,
    getImagesByUser
}
