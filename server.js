const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const knex = require('./db/knex');
const io = require('socket.io')();


const index = require('./routes/indexRoutes');
const cards = require('./routes/cardRoutes');
const players = require('./routes/playerRoutes');
const games = require('./routes/gameRoutes');
const rounds = require('./routes/roundRoutes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use('/', index);
app.use('/cards', cards);
app.use('/players', players);
app.use('/games', games);
app.use('/rounds', rounds);

app.listen(port, function() {
  console.log("listening on port: ", port);
})
