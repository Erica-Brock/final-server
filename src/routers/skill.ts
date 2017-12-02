import { Router } from 'express';
import{ create, read, update, destroy, all, deleteUserSkill, getUserBySkills, insertUserSkill} from '../controllers/skills.ctrl'

const router= Router();
router
 .get('/', all)
 .get('/:id', read)
 .get('/:user', getUserBySkills)
 .post('/', create)
 .post('/:user', insertUserSkill)
 .put('/:id', update)
 .delete('/:id', destroy)
 .delete('/:user',deleteUserSkill);

 export default router;