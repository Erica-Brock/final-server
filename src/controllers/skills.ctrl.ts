import { NextFunction, Request, Response } from 'express';
import { procedure } from '../config/db/index';
import procedures from '../procedures/skills.proc';


export const create = (req: Request, res: Response, next: NextFunction) => {
    procedures.create(req.body.skill)
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
export const deleteUserSkill= (req: Request, res: Response, next: NextFunction) => {
    procedures.deleteUserSkill(+req.params.user_id, +req.body.skill_id)
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
export const getUserBySkills = (req: Request, res: Response, next: NextFunction) => {
    procedures.getUserBySkills(+req.params.skill_id)
        .then((sets) => {
            res.json(sets);
        });
};
export const insertUserSkill = (req: Request, res: Response, next: NextFunction) => {
    procedures.insertUserSkill(+req.params.user_id, +req.body.skill_id)
        .then((sets) => {
            res.json(sets);
        });
};