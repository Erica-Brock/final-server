import { Router } from 'express';
import{create, read, update, destroy, all, allPoster, allReceiver } from '../controllers/review.ctrl'

const router = Router();
router
    .get('/', read)
    .get('/:id', all)
    .get('/poster/:id', allPoster)
    .get('/reciever/:id',allReceiver)
    .post('/', create)
    .put('/', update)
    .delete('/', destroy);


export default router