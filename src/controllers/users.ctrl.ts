import { NextFunction, Request, Response } from 'express';
import { procedure } from '../config/db/index';
import procedures from '../procedures/user.proc';
// import { client } from "../index";
import * as algoliasearch from "algoliasearch";
const client = algoliasearch("NGFATQMT4B", "3c9872f8338b96966a9dab158cc77e70");

const index = client.initIndex('FinalUsers');

// EDIITED SO WHEN YOU CREATE A USER, IT GRABS THE SKILL IDS FROM THE BODY AND CREATES THE USERS SKILLS
//IN THE USERSKILLS TABLE
export const create = (req: Request, res: Response, next: NextFunction) => {
    procedure("spInsertUser", [req.body.name, req.body.password, req.body.email, req.body.city, req.body.state, req.body.phone, req.body.bio, req.body.img, req.body.index_id])
    .then((id) => {
        console.log(id[0][0].id)
        const skillIDs = req.body.skills;

        const skillPromises = skillIDs.map((s: any) => {
            return procedure("spInsertUserskill", [id[0][0].id, s])
        });

        Promise.all(skillPromises)
        .then(()=> {
            res.end();
        })
        
        // index.addObject(req.body, (err, content) => {
        //     console.log(content)
        //     procedure("spInsertUser", [req.body.name, req.body.password, req.body.email, req.body.city, req.body.state, req.body.phone, req.body.bio, req.body.img, content.objectID])
        //     .then((id: any) => {
        //         console.log(id[0][0].id)
    
        //         index.partialUpdateObject({
        //             id: id[0][0].id,
        //             objectID: content.objectID
        //         })
        //     })
        // })   
    })
};

export const read = (req: Request, res: Response, next: NextFunction) => {
    procedures.read(+req.params.id)
        .then((sets) => {
            res.json(sets);
        });
};

//EDITED TO UPDATE A USER AND INSERT IT INTO THE INDEX AND THE SQL DATABASE
export const update = (req: Request, res: Response, next: NextFunction) => {
    procedure("spUpdateUser", [+req.params.id, req.body.name, req.body.password, req.body.email, req.body.city, req.body.state, req.body.phone, req.body.bio, req.body.img] )
    .then((user:any) => {
        res.json(user);
        procedure("spGetUser", [+req.params.id])
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
//EDITED TO DESTROY A USER IN THE SQL AND IN THE INDEX

export const destroy = (req: Request, res: Response, next: NextFunction) => {
    procedure("spGetUser", [+req.params.id])
    .then((user: any) => {
        console.log(user[0][0])
        index.deleteObject(user[0][0].index_id, (err) => {
            if (!err) {
              console.log('success');
            }
        });

        procedure("spDeleteUser", [+user[0][0].id])
        .then((res) => {
            console.log('deleted')
        })
    })
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