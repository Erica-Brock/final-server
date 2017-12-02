import { row, rows, empty } from './base.proc';
const create = (skill:string)=> {
    return row('spInsertSkill', [skill]);
};
const read = (id:number)=>{
    return row('spGetSkill',[id]);
};
const update = (id:number, provider:string, title:string, description:string)=>{
    return empty('spUpdateSkill',[id, provider, title, description]);
};
const destroy = (id:number)=>{
    return empty('spDeleteSkill', [id,]);
};
const all = ()=>{
    return rows('spGetSkills');
};
const deleteUserSkill = (user_id:number, skill_id:number)=>{
    return empty('spDeleteUserskill', [user_id,skill_id]);
};
const getUserBySkills = (user_id:number)=>{
    return row('spGetUserBySkills',[user_id]);
};
const insertUserSkill = (user_id:number, skill_id:number)=> {
    return row('spInsertUserskill', [user_id, skill_id]);
};

export default {
create,
read,
update,
destroy,
all,
deleteUserSkill,
getUserBySkills,
insertUserSkill
}