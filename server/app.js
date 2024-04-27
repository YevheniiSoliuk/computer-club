const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: ['http://localhost:5173']
}))

app.use(router);

app.listen(3000).addListener('listening', () => {
  console.log('Listen on port 3000');
});