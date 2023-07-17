/** создаем сервер подключением модуля express */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
/** подключаем модуль к бд */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require('mongoose');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const helmet = require('helmet');

// eslint-disable-next-line no-undef, @typescript-eslint/no-unused-vars
const { PORT = 3000 } = process.env;
// const { PORT = 3000, DB_URL = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;
const app = express();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const router = require('./routes/index');

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
  res.status(404).send({ message: 'Страница не найдена' });
});


app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Сервер запущен!');
});
