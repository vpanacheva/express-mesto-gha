
import {Router as expressRouter} from "express";
const router = expressRouter();

import {
  createCard,
  getCards,
  deleteCard,
  likeCard,
  dislikeCard } from '../controllers/cards.js';

router.get('/', getCards);
router.post('/', createCard);
router.delete('/:cardId', deleteCard);
router.put('/:cardId/likes', likeCard);
router.delete('/:cardId/likes', dislikeCard);

export default router;
