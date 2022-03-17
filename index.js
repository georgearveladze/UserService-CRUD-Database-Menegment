const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const route = require('./routes/router');
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, () =>
  console.log('DataBase connected')
);

app.use(route);
app.listen(3000);
