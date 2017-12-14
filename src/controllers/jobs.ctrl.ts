import { NextFunction, Request, Response } from 'express';
import { procedure } from '../config/db/index';
import procedures from '../procedures/job.proc';
import { algoliaJobsIndex } from '../middleware/algolia.mw';

export const create = (req: Request, res: Response, next: NextFunction) => {
    procedures.create(req.body.client_id, req.body.provider_id, req.body.title, req.body.description, req.body.location, req.body.isAccepted, req.body.isCompleted)
        .then((job: any) => {
            console.log('adding job', job);
            algoliaJobsIndex.add(job);
            res.json({
                id: job.id
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
    const promises = [
        procedures.update(
            req.params.id,
            req.body.client_id,
            req.body.provider_id, 
            req.body.title, 
            req.body.description, 
            req.body.location, 
            req.body.isAccepted, 
            req.body.isCompleted
        ),
        algoliaJobsIndex.partialUpdate({
            ...req.body,
            objectID: req.params.id
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
        algoliaJobsIndex.delete(req.params.id)
    ];
    
    Promise.all(<any>promises)
        .then((results: Array<any>) => {
            res.end();
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

export const book = (req: Request, res: Response, next: NextFunction) => {
    procedures.book(+req.body.id, +req.body.provider_id)
        .then((job) => {
           res.end();
        });
};

export const refresh = (req: Request, res: Response, next: NextFunction) => {
    procedures.all()
        .then((jobs) => {
            algoliaJobsIndex.refresh(jobs)
                .then((ids) => {
                    res.end();
                });
        });
};

export const complete = (req: Request, res: Response, next: NextFunction) => {
    procedures.complete(+req.params.id)
        .then(() => {
            res.end();
        });
};  