const router = require('express').Router();

const usersRouter = require('./users');

const cardsRouter = require('./cards').default;

router.use('/cards', cardsRouter);
router.use('/users', usersRouter);

module.exports = router;
