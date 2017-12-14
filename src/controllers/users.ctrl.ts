import { NextFunction, Request, Response } from 'express';
import { procedure } from '../config/db/index';
import procedures from '../procedures/user.proc';
import { algoliaUsersIndex, algoliaJobsIndex } from '../middleware/algolia.mw';
import { clone } from 'lodash';

export const create = (req: Request, res: Response, next: NextFunction) => {
    procedures.create(req.body.name, req.body.password, req.body.email, req.body.city, req.body.state, req.body.phone, req.body.bio, req.body.img)
        .then((id) => {
            const userId = id[0][0].id;
            const skillIDs = req.body.skills;
            const promises: Array<any> = [];

            skillIDs.forEach((s: any) => {
                promises.push(procedure("spInsertUserskill", [userId, s]));
            });

            promises.push(algoliaUsersIndex.add({
                ...req.body, 
                objectID: userId
            }));

            Promise.all(<any>promises)
            .then(()=> {
                res.end();
            }); 
        });
};

export const read = (req: Request, res: Response, next: NextFunction) => {
    procedures.read(+req.params.id)
        .then((sets) => {
            res.json(sets);
        });
};

export const update = (req: Request, res: Response, next: NextFunction) => {
    const algoliaUser = clone(req.body);
    delete algoliaUser.password;

    const promises = [
        procedures.update(
            req.params.id,
            req.body.name,
            req.body.password, 
            req.body.email, 
            req.body.city, 
            req.body.state, 
            req.body.phone, 
            req.body.bio,
            req.body.image
        ),
        algoliaUsersIndex.partialUpdate({
            ...algoliaUser,
            objectID: algoliaUser.id
        })
    ]

    Promise.all(<any>promises)
        .then((results: any) => {
            res.end();
        })
        .catch((err) => {
        });
};

export const destroy = (req: Request, res: Response, next: NextFunction) => {
    const promises = [
        procedures.destroy(+req.params.id),
        algoliaUsersIndex.delete(req.params.id)
    ];
    
    Promise.all(<any>promises)
        .then((results: Array<any>) => {
            res.end();
        });
};
export const all = (req: Request, res: Response, next: NextFunction) => {
    procedures.all()
        .then((sets) => {
            const result = sets.map((s) => {
               s.skills = s.skills.split(',')
                return s;
            })

            res.json(result);
        });
};
export const getJobsByClient = (req: Request, res: Response, next: NextFunction) => {
    procedures.getJobsByClient(+req.params.id)
        .then((sets) => {
            res.json(sets);
        });
};
export const getJobsByProvider = (req: Request, res: Response, next: NextFunction) => {
    procedures.getJobsByProvider(+req.params.id)
        .then((sets) => {
            res.json(sets);
        });
};
export const getSkillsByUser = (req: Request, res: Response, next: NextFunction) => {
    procedures.getSkillsByUser(+req.params.id)
        .then((sets) => {
            res.json(sets);
        });
};
export const getImagesByUser = (req: Request, res: Response, next: NextFunction) => {
    procedures.getImagesByUser(+req.params.id)
        .then((sets) => {
            res.json(sets);
        });
};

export const refresh = (req: Request, res: Response, next: NextFunction) => {
    procedures.all()
        .then((users) => {
            algoliaUsersIndex.refresh(users)
                .then((ids) => {
                    res.end();
                });
        });
};