import jobs from './jobs';
import reviews from './review';
import user from './user';
import skills from "./skill";
import portfolio from "./portfolio"
import auth from './auth';
import { Router } from 'express';

const router: Router = Router();

router
    .use('/jobs', jobs)
    .use('/reviews', reviews)
    .use('/users', user)
    .use('/skills', skills)
    .use('/images', portfolio)
    .use('/auth', auth);
;

export default router;