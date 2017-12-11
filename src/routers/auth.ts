import { Router } from 'express';
import { login, refresh } from '../controllers/auth.ctrl';
import { authenticate } from '../middleware/auth';

const router = Router();

router
    .get('/refresh', refresh)
    .post('/login', login);
 export default router;
  