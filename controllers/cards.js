
import { find, create, findByIdAndRemove, findByIdAndUpdate } from '../models/card';

const ERROR_BAD_REQUEST = 400;
const ERROR_NOT_FOUND = 404;
const ERROR_SERVER_ERROR = 500;

const getCards = (req, res) => {
  find({})
    .then((cards) => {
      res.send(cards);
    })
    .catch(() => {
      res
        .status(ERROR_SERVER_ERROR)
        .console.log('На сервере произошла ошибка');
    });
};

const createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  create({
    name,
    link,
    owner,
  })
    .then((card) => {
      res.status(201).send(card);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res
          .status(ERROR_BAD_REQUEST)
          .send({
            message: 'Переданы некорректные данные при создании карточки.',
          });
      } else {
        res
          .status(ERROR_SERVER_ERROR)
          .send({ message: 'На сервере произошла ошибка' });
      }
    });
};

const deleteCard = (req, res) => {
  findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (!card) {
        return findByIdAndRemove(req.params.cardId);
      }
      res.send({ card });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res
          .status(ERROR_BAD_REQUEST)
          .send({
            message: 'Переданы некорректные данные при удалении карточки.',
          });
      } else {
        res
          .status(ERROR_SERVER_ERROR)
          .send({ message: 'На сервере произошла ошибка' });
      }
    });
};

const likeCard = (req, res) => {
  findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        res
          .status(ERROR_NOT_FOUND)
          .send({ message: 'Передан несуществующий id карточки.' });
      } else {
        res.send({ card });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res
          .status(ERROR_BAD_REQUEST)
          .send({
            message: 'Переданы некорректные данные для постановки лайка.',
          });
      } else {
        res
          .status(ERROR_SERVER_ERROR)
          .send({ message: 'На сервере произошла ошибка' });
      }
    });
};

const dislikeCard = (req, res) => {
  findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        res
          .status(ERROR_NOT_FOUND)
          .send({ message: 'Передан несуществующий id карточки.' });
      } else {
        res.send({ card });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res
          .status(ERROR_BAD_REQUEST)
          .send({ message: 'Переданы некорректные данные для снятии лайка.' });
      } else {
        res
          .status(ERROR_SERVER_ERROR)
          .send({ message: 'На сервере произошла ошибка' });
      }
    });
};

export default {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
