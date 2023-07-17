// eslint-disable-next-line @typescript-eslint/no-var-requires
const router = require('express').Router();

const {
  createCard, getCards, deleteCard, likeCard, dislikeCard,
// eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', createCard);
router.delete('/:cardId', deleteCard);
router.put('/:cardId/likes', likeCard);
router.delete('/:cardId/likes', dislikeCard);

module.exports = router;
