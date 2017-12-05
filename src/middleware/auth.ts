import { Request, Response, NextFunction } from 'express';
import { isEmpty, isNil } from 'lodash';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    if (isEmpty((<any>req).session) || isNil((<any>req).session.userid) ) {
        throw new Error('User is unauthenticated');
    } 

    next();
};