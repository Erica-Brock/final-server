"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../config/db/index");
const user_proc_1 = require("../procedures/user.proc");
// import { client } from "../index";
const algoliasearch = require("algoliasearch");
const client = algoliasearch("NGFATQMT4B", "3c9872f8338b96966a9dab158cc77e70");
const index = client.initIndex('FinalUsers');
// EDIITED SO WHEN YOU CREATE A USER, IT GRABS THE SKILL IDS FROM THE BODY AND CREATES THE USERS SKILLS
//IN THE USERSKILLS TABLE
exports.create = (req, res, next) => {
    index_1.procedure("spInsertUser", [req.body.name, req.body.password, req.body.email, req.body.city, req.body.state, req.body.phone, req.body.bio, req.body.img, req.body.index_id])
        .then((id) => {
        console.log(id[0][0].id);
        const skillIDs = req.body.skills;
        const skillPromises = skillIDs.map((s) => {
            return index_1.procedure("spInsertUserskill", [id[0][0].id, s]);
        });
        Promise.all(skillPromises)
            .then(() => {
            res.end();
        });
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
    });
};
exports.read = (req, res, next) => {
    user_proc_1.default.read(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
//EDITED TO UPDATE A USER AND INSERT IT INTO THE INDEX AND THE SQL DATABASE
exports.update = (req, res, next) => {
    index_1.procedure("spUpdateUser", [+req.params.id, req.body.name, req.body.password, req.body.email, req.body.city, req.body.state, req.body.phone, req.body.bio, req.body.img])
        .then((user) => {
        res.json(user);
        index_1.procedure("spGetUser", [+req.params.id])
            .then((user) => {
            console.log(user[0][0]);
            index.saveObject(Object.assign({}, user[0][0], { objectID: user[0][0].index_id }), (err, content) => {
                console.log(content);
            });
        });
    });
};
//EDITED TO DESTROY A USER IN THE SQL AND IN THE INDEX
exports.destroy = (req, res, next) => {
    index_1.procedure("spGetUser", [+req.params.id])
        .then((user) => {
        console.log(user[0][0]);
        index.deleteObject(user[0][0].index_id, (err) => {
            if (!err) {
                console.log('success');
            }
        });
        index_1.procedure("spDeleteUser", [+user[0][0].id])
            .then((res) => {
            console.log('deleted');
        });
    });
};
exports.all = (req, res, next) => {
    user_proc_1.default.all()
        .then((sets) => {
        const result = sets.map((s) => {
            s.skills = s.skills.split(',');
            return s;
        });
        res.json(result);
    });
};
exports.getJobsByClient = (req, res, next) => {
    user_proc_1.default.getJobsByClient(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.getJobsByProvider = (req, res, next) => {
    user_proc_1.default.getJobsByProvider(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.getSkillsByUser = (req, res, next) => {
    user_proc_1.default.getSkillsByUser(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.getImagesByUser = (req, res, next) => {
    user_proc_1.default.getImagesByUser(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
