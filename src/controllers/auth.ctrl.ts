import { NextFunction, Request, Response } from 'express';
import procedures from '../procedures/auth.proc';
import {isNil} from 'lodash';
import {comparePassword} from '../middleware/bcrypt'

export const login = (req: Request, res: Response, next: NextFunction) => {
    procedures.login(req.body.email)
        .then((user) => {
          if(isNil(user) || !comparePassword(user.password, req.body.password)){
              throw new Error();
          }

          (<any>req).session.userid = user.id;

          delete user.password;

          res.send(user);
        });
};
