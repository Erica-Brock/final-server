import { NextFunction, Request, Response } from 'express';
import { procedure } from '../config/db/index';
import procedures from '../procedures/job.proc';
// import { client } from "../index";
import * as algoliasearch from "algoliasearch";
const client = algoliasearch("NGFATQMT4B", "3c9872f8338b96966a9dab158cc77e70");


const index = client.initIndex('FinalJobs');


// EDITED TO CREATE A JOB AND INSERT IT INTO SQL AND THE ALGOLIA INDEX
export const create = (req: Request, res: Response, next: NextFunction) => {
    index.addObject(req.body, (err, content) => {
        console.log(content)
        procedure("spInsertJob", [req.body.client_id, req.body.provider_id, req.body.title, req.body.description, req.body.location, req.body.status])
        .then((id: any) => {
            console.log(id[0][0].id)

            index.partialUpdateObject({
                id: id[0][0].id,
                objectID: content.objectID
            })
        })
    })   
};

export const read = (req: Request, res: Response, next: NextFunction) => {
    procedures.read(+req.params.id)
        .then((sets) => {
            res.json(sets);
        });
};

//EDITED TO UPDATE A JOB AND INSERT IT INTO THE INDEX AND THE SQL DATABASE
export const update = (req: Request, res: Response, next: NextFunction) => {
    procedure("spUpdateJob", [req.body.client_id, req.body.provider_id, req.body.title, req.body.description, req.body.location, req.body.status] )
    .then((user:any) => {
        res.json(user);
        procedure("spGetJob", [+req.params.id])
        .then((user: any) => {
            console.log(user[0][0])
            index.saveObject({
                ...user[0][0],
                 objectID: user[0][0].index_id 
                }, (err, content) => {
                console.log(content)
            })
        })
    })
};
//EDITED TO DESTROY A JOB IN THE SQL AND IN THE INDEX
export const destroy = (req: Request, res: Response, next: NextFunction) => {
    procedure("spGetJob", [+req.params.id])
    .then((job: any) => {
        console.log(job[0][0])
        index.deleteObject(job[0][0].index_id, (err) => {
            if (!err) {
              console.log('success');
            }
        });

        procedure("spDeleteJob", [+job[0][0].id])
        .then((res) => {
            console.log('deleted')
        })
    })
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