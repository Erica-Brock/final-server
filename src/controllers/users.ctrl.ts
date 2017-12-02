import { NextFunction, Request, Response } from 'express';
import { procedure } from '../config/db/index';
import procedures from '../procedures/user.proc';export 

const create = (req: Request, res: Response, next: NextFunction) => {
    procedures.create(+req.params.id, req.body.name, req.body.password, req.body.email, req.body.city, req.body.state, req.body.phone, req.body.bio, req.body.img)
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
    procedures.update(+req.params.id, req.body.name, req.body.password, req.body.email, req.body.city, req.body.state, req.body.phone, req.body.bio, req.body.img)
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
export const getJobsByClient = (req: Request, res: Response, next: NextFunction) => {
    procedures.getJobsByClient(+req.params.client_id)
        .then((sets) => {
            res.json(sets);
        });
};
export const getJobsByProvider = (req: Request, res: Response, next: NextFunction) => {
    procedures.getJobsByProvider(+req.params.provider_id)
        .then((sets) => {
            res.json(sets);
        });
};
export const getSkillsByUser = (req: Request, res: Response, next: NextFunction) => {
    procedures.getSkillsByUser(+req.params.user_id)
        .then((sets) => {
            res.json(sets);
        });
};
export const getImagesByUser = (req: Request, res: Response, next: NextFunction) => {
    procedures.getImagesByUser(+req.params.user_id)
        .then((sets) => {
            res.json(sets);
        });
};