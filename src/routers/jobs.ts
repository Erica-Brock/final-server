import { Router } from 'express';
import{ create, read, update, destroy, all, getImagesByJob, book, refresh } from '../controllers/jobs.ctrl'

const router= Router();
router
 .get('/', all)
 .get('/images/:id', getImagesByJob)
 .get('/refreshIndex', refresh)
 .get('/:id', read)
 .post('/', create)
 .put('/book', book) 
 .put('/:id', update)
 .delete('/:id', destroy);

 export default router;
  