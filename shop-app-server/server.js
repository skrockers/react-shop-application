const express = require('express');
const app = express();
const path = require('path');

app.use(require('./database/dbConnect'));
app.use(require('./middlewares/cors/cors'));

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.listen(6500, () => {
  console.log('Server started on port 6500');
});

