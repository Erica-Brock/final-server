import { NextFunction, Request, Response } from 'express';
import { procedure } from '../config/db/index';
import procedures from '../procedures/job.proc';
import { algoliaJobsIndex } from '../middleware/algolia.mw';

export const create = (req: Request, res: Response, next: NextFunction) => {
    procedures.create(req.body.client_id, req.body.provider_id, req.body.title, req.body.description, req.body.location, req.body.isAccepted, req.body.isCompleted)
        .then((job: any) => {
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
            console.log(results);
        })
        .catch((err) => {
            console.log(err);
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
            console.log(job);
           
        });
};

export const refresh = (req: Request, res: Response, next: NextFunction) => {
    procedures.all()
        .then((jobs) => {
            algoliaJobsIndex.refresh(jobs)
                .then((ids) => {
                    console.log('updated all jobs in algolia');
                    res.end();
                });
        });
};