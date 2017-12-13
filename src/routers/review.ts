import { Router } from 'express';
import{
    create, 
    read, 
    update, 
    destroy, 
    all, 
    allByProvider, 
    allReceiver, 
    allByJob 
} from '../controllers/review.ctrl'

const router = Router();

router
    .get('/', all)
    .get('/:id', read)
    .get('/provider/:id', allByProvider)
    .get('/receiver/:id',allReceiver)
    .get('/job/:id', allByJob)
    .post('/', create)
    .put('/', update)
    .delete('/', destroy);


export default router;