import { Router } from 'express';
import{ create, read, update, destroy, all, deleteUserSkill, getUserBySkills, insertUserSkill} from '../controllers/skills.ctrl'

const router = Router();

router
 .get('/', all)
 .get('/:id', read)
 .get('/user/:id', getUserBySkills)
 .post('/', create)
 .post('/:id', insertUserSkill)
 .put('/:id', update)
 .delete('/:id', destroy)
 .delete('/skill/:id', deleteUserSkill);

 export default router;