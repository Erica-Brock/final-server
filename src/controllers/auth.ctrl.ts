import { NextFunction, Request, Response } from 'express';
import procedures from '../procedures/auth.proc';
import {isNil} from 'lodash';
import {comparePassword} from '../middleware/bcrypt'

export const login = (req: Request, res: Response, next: NextFunction) => {
    procedures.login(req.body.email)
        .then((user) => {
            console.log('user', user);
          if(isNil(user)) {
              throw new Error('User was not found');
          } 

          if (user.password !== req.body.password) {
              throw new Error('Password does not match');
          }

          (<any>req).session.userid = user.id;

          console.log((<any>req).session);

          delete user.password;

          res.send(user);
        });
};

