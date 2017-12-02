import { NextFunction, Request, Response } from 'express';
import { procedure } from '../config/db/index';
import procedures from '../procedures/portfolio.proc';


export const create = (req: Request, res: Response, next: NextFunction) => {
    procedures.create(+req.body.user_id, req.body.job_id, req.body.image, req.body.description)
        .then((sets) => {
            res.json(sets);
        });
};
export const read = (req: Request, res: Response, next: NextFunction) => {
    procedures.read(+req.params.id)
        .then((sets) => {
            res.json(sets);
        });
};
export const update = (req: Request, res: Response, next: NextFunction) => {
    procedures.update(+req.body.id, +req.body.user_id, req.body.job_id, req.body.image, req.body.description)
        .then((sets) => {
            res.json(sets);
        });
};
export const destroy = (req: Request, res: Response, next: NextFunction) => {
    procedures.destroy(+req.params.id,+req.params.user_id)
        .then((sets) => {
            res.json(sets);
        });
};
export const all = (req: Request, res: Response, next: NextFunction) => {
    procedures.all()
        .then((sets) => {
            res.json(sets);
        });
};