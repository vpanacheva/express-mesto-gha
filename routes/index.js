import {Router as expressRouter} from "express";
const router = expressRouter();

import usersRouter from './users.js';

import cardsRouter from './cards.js';

router.use('/cards', cardsRouter);
router.use('/users', usersRouter);

export default router;
