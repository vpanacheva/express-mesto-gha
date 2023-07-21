
const router = require('express').Router();

import { createCard, getCards, deleteCard, likeCard, dislikeCard } from '../controllers/cards';

router.get('/', getCards);
router.post('/', createCard);
router.delete('/:cardId', deleteCard);
router.put('/:cardId/likes', likeCard);
router.delete('/:cardId/likes', dislikeCard);

export default router;
