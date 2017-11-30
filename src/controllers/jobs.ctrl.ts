import { NextFunction, Request, Response } from 'express';
import { procedure } from '../config/db/index';
import procedures from '../procedures/job.proc';

const create = (req: Request, res: Response, next: NextFunction) => {
    procedures.create(+req.body.id)
        .then((sets) => {
            res.json(sets);
        });
};
const read = (req: Request, res: Response, next: NextFunction) => {
    procedures.read(+req.params.id)
        .then((sets) => {
            res.json(sets);
        });
};
const update = (req: Request, res: Response, next: NextFunction) => {
    procedures.update(+req.params.id)
        .then((sets) => {
            res.json(sets);
        });
};
const destroy = (req: Request, res: Response, next: NextFunction) => {
    procedures.destroy(+req.params.id)
        .then((sets) => {
            res.json(sets);
        });
};
const all = (req: Request, res: Response, next: NextFunction) => {
    procedures.all()
        .then((sets) => {
            res.json(sets);
        });
};