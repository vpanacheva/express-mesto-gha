import {Router as expressRouter} from "express";
const router = expressRouter();

import usersRouter from './users';
import cardsRouter from './cards';

router.use('/cards', cardsRouter);
router.use('/users', usersRouter);

export default router;
