const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');

//const { PORT = 3000 } = process.env;
const app = express();
const router = require('./routes/index');
const ERROR_NOT_FOUND = 404;
/** подключаем к бд */
mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use((req, res, next) => {
  req.user = {
    _id: '64b51ee258256f3b8053578f',
  };
  next();
});

app.use(express.json());
app.use(helmet());
app.use('/', router);
app.use('/', (req, res) => {
  res.status(ERROR_NOT_FOUND).send({ message: 'Страница не найдена' });
});


app.listen(3000, () => {
  console.log('Сервер запущен!');
});
