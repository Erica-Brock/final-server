import { NextFunction, Request, Response } from 'express';
import { procedure } from '../config/db/index';
import procedures from '../procedures/review.proc';


export const create = (req: Request, res: Response, next: NextFunction) => {
    procedures.create(req.body.poster, req.body.receiver, req.body.review)
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
    procedures.update(+req.params.id, req.body.poster, req.body.review)
        .then((sets) => {
            res.json(sets);
        });
};
export const destroy = (req: Request, res: Response, next: NextFunction) => {
    procedures.destroy(+req.params.id, req.body.poster)
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
export const allPoster = (req: Request, res: Response, next: NextFunction) => {
    procedures.allPoster(+req.params.id)
        .then((sets) => {
            res.json(sets);
        });
};
export const allReceiver = (req: Request, res: Response, next: NextFunction) => {
    procedures.allReceiver(+req.params.id)
        .then((sets) => {
            res.json(sets);
        });
};