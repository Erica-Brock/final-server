import { procedure } from '../config/db/index';

export const rows = (procedureName: string, args: Array<any> = []) => {
    return procedure(procedureName, args)
        .then((rows) => {
            return rows[0];
        });
};

export const row = (procedureName: string, args: Array<any> = []) => {
    return procedure(procedureName, args)
        .then((rows) => {
            return rows[0][0];
        });
};

export const empty = (procedureName: string, args: Array<any> = []) => {
    return procedure(procedureName, args)
        .then(() => {
            return;
        });
};