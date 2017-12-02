import { Router } from 'express';
import{ create, read, update, destroy, all, getJobsByClient, getJobsByProvider, getSkillsByUser, getImagesByUser} from '../controllers/users.ctrl'

const router= Router();
router

 .get('/', all)
 .get('/:id', read)
 .get('/jobs/posted/:client_id',getJobsByClient)
 .get('/jobs/accepted/:provider_id',getJobsByProvider)
 .get('/skills/:user_id',getSkillsByUser)
 .get('/images/:user_id',getImagesByUser)
 .post('/', create)
 .put('/:id', update)
 .delete('/:id', destroy);


 export default router;