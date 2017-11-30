import { Router } from 'express';
import{create, read, update, destroy, all } from '../controllers/review.ctrl'

const router = Router();
router
    .get('/', read)
    .get('/:id', all)
    .post('/', create)
    .put('/', update)
    .delete('/', destroy);

export default router