import jobs from './jobs';
import reviews from './review';
import user from './user';
import { Router } from 'express';

const router: Router = Router();

router
    .use('/jobs',jobs )
    .use('/reviews',reviews)
    .use('/users', user)
;

export default router;