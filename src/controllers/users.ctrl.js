"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../config/db/index");
const user_proc_1 = require("../procedures/user.proc");
const algolia_mw_1 = require("../middleware/algolia.mw");
const lodash_1 = require("lodash");
exports.create = (req, res, next) => {
    user_proc_1.default.create(req.body.name, req.body.password, req.body.email, req.body.city, req.body.state, req.body.phone, req.body.bio, req.body.img)
        .then((id) => {
        const userId = id[0][0].id;
        const skillIDs = req.body.skills;
        const promises = [];
        skillIDs.forEach((s) => {
            promises.push(index_1.procedure("spInsertUserskill", [userId, s]));
        });
        promises.push(algolia_mw_1.algoliaUsersIndex.add(Object.assign({}, req.body, { objectID: userId })));
        Promise.all(promises)
            .then(() => {
            res.end();
        });
    });
};
exports.read = (req, res, next) => {
    user_proc_1.default.read(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.update = (req, res, next) => {
    const algoliaUser = lodash_1.clone(req.body);
    delete algoliaUser.password;
    const promises = [
        user_proc_1.default.update(req.params.id, req.body.name, req.body.password, req.body.email, req.body.city, req.body.state, req.body.phone, req.body.bio, req.body.image),
        algolia_mw_1.algoliaUsersIndex.partialUpdate(Object.assign({}, algoliaUser, { objectID: algoliaUser.id }))
    ];
    Promise.all(promises)
        .then((results) => {
        res.end();
    })
        .catch((err) => {
    });
};
exports.destroy = (req, res, next) => {
    const promises = [
        user_proc_1.default.destroy(+req.params.id),
        algolia_mw_1.algoliaUsersIndex.delete(req.params.id)
    ];
    Promise.all(promises)
        .then((results) => {
        res.end();
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
exports.refresh = (req, res, next) => {
    user_proc_1.default.all()
        .then((users) => {
        algolia_mw_1.algoliaUsersIndex.refresh(users)
            .then((ids) => {
            res.end();
        });
    });
};
