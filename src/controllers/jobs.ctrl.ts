import { NextFunction, Request, Response } from 'express';
import { procedure } from '../config/db/index';
import procedures from '../procedures/job.proc';


export const create = (req: Request, res: Response, next: NextFunction) => {
    procedures.create(+req.body.client_id, +req.body.provider_id, req.body.title, req.body.description)
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
    procedures.update(+req.params.id, req.body.provider, req.body.title, req.body.description)
        .then((sets) => {
            res.json(sets);
        });
};
export const destroy = (req: Request, res: Response, next: NextFunction) => {
    procedures.destroy(+req.params.id)
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
export const getImagesByJob = (req: Request, res: Response, next: NextFunction) => {
    procedures.getImagesByJob(+req.params.id)
        .then((sets) => {
            res.json(sets);
        });
};