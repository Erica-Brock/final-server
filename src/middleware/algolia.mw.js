"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const algolia = require("algoliasearch");
class AlgoliaIndex {
    constructor(indexName) {
        const client = algolia('NGFATQMT4B', '3c9872f8338b96966a9dab158cc77e70');
        this.index = client.initIndex(indexName);
    }
    /**
     * Use this method if you want to update the entire index
     * You should delete the index objects first in Algolia
     */
    refresh(models) {
        const ids = models.map((model) => {
            return model.id;
        });
        return new Promise((resolve, reject) => {
            this.index.deleteObjects(ids, (err, res) => {
                if (err)
                    reject(err);
                models.forEach((model) => {
                    model.objectID = model.id;
                });
                this.index.addObjects(models, (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res);
                });
            });
        });
    }
    /**
     *
     * @param model
     * This is for adding an object to algolia
     */
    add(model) {
        return new Promise((resolve, reject) => {
            this.index.addObject(model, (err, obj) => {
                if (err)
                    reject(err);
                resolve(obj);
            });
        });
    }
    /**
     *
     * @param model
     * You must update all attributes, other than objectID
     */
    update(model) {
        return new Promise((resolve, reject) => {
            this.index.saveObject(model, (err, res) => {
                if (err)
                    reject(err);
                resolve(res);
            });
        });
    }
    /**
     * You can update one or more attributes
     */
    partialUpdate(model) {
        return new Promise((resolve, reject) => {
            this.index.partialUpdateObject(model, (err, res) => {
                if (err)
                    reject(err);
                resolve(res);
            });
        });
    }
    delete(indexId) {
        return new Promise((resolve, reject) => {
            this.index.deleteObject(indexId, (err, res) => {
                if (err)
                    reject(err);
                resolve(res);
            });
        });
    }
}
exports.algoliaJobsIndex = new AlgoliaIndex('FinalJobs');
exports.algoliaUsersIndex = new AlgoliaIndex('FinalUsers');
