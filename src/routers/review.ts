import { Router } from 'express';
import{create, read, update, destroy, all, allPoster, allReceiver } from '../controllers/review.ctrl'

const router = Router();
router
    .get('/', all)
    .get('/:id', read)
    .get('/poster/:id', allPoster)
    .get('/receiver/:id',allReceiver)
    .post('/', create)
    .put('/', update)
    .delete('/', destroy);


export default router