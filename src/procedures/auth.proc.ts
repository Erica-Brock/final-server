import { row, rows, empty } from './base.proc';

const login = (email:string)=> {
    return row('spGetUserByEmail', [email]);
};

const refresh = (id: number) => {
    return row('spGetUserById', [id]);
};

export default {
    login,
    refresh
}