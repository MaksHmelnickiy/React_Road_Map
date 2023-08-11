const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Подключение пакета cors
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Использование cors middleware
app.use(cors());

app.post('/upload', (req, res) => {
  const formData = req.body;
  console.log('FormData:', formData);

  // Ваша логика обработки данных FormData

  const response = { message: 'Данные успешно получены и обработаны.' };
  res.json(response);
});
// ⁡⁢⁣⁣запуск  сервер npm start⁡ /
const port = 3003;
app.listen(port, () => {
  console.log(`Сервер запущен на порте ${port}`);
});
