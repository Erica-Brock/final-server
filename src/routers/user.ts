import { Router } from 'express';
import{ create, read, update, destroy, all, getJobsByClient, getJobsByProvider, getSkillsByUser, getImagesByUser} from '../controllers/users.ctrl'

const router= Router();
router

 .get('/', all)
 .get('/:id', read)
 .get('/jobs/posted/:id', getJobsByClient)
 .get('/jobs/accepted/:id',getJobsByProvider)
 .get('/skills/:id',getSkillsByUser)
 .get('/images/:id',getImagesByUser)
 .post('/', create)
 .put('/:id', update)
 .delete('/:id', destroy);


 export default router;