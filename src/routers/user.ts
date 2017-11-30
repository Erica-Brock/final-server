import { Router } from 'express';
import{ create, read, update, destroy, all } from '../controllers/users.ctrl'

const router= Router();
router
 .get('/', all)
 .get('/:id', read)
 .post('/', create)
 .put('/:id', update)
 .delete('/:id', destroy);

 export default router;