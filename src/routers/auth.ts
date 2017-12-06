import { Router } from 'express';
import { login, test } from '../controllers/auth.ctrl';
import { authenticate } from '../middleware/auth';

const router = Router();

router
    .post('/login', login);
 export default router;
  