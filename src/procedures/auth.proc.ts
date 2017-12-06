import { row, rows, empty } from './base.proc';

const login = (email:string)=> {
    return row('spGetUserByEmail', [email]);
};

export default {
    login
}