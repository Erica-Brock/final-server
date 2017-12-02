import { Router } from 'express';
import{ create, read, update, destroy, all, getImagesByJob } from '../controllers/jobs.ctrl'

const router= Router();
router
 .get('/', all)
 .get('/images/:id', getImagesByJob)
 .get('/:id', read)
 .post('/', create)
 .put('/:id', update)
 .delete('/:id', destroy);

 export default router;
  