// eslint-disable-next-line @typescript-eslint/no-var-requires
const router = require('express').Router();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const usersRouter = require('./users');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cardsRouter = require('./cards');

router.use('/cards', cardsRouter);
router.use('/users', usersRouter);

module.exports = router;
