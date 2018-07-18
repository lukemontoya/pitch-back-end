const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res) {
  knex('game')
    .then((games) => {
    res.json(games);
  });
});

router.post('/', (req, res, next) => {
  knex('games')
    .insert({
      player_1: req.body.player_1,
      player_2: req.body.player_2,
      player_3: req.body.player_3,
      player_4: req.body.player_4,
      winner: req.body.winner,
      player_id: req.body.player_id,
      })
    .then((games) => {
    res.json(games);
  });
});

router.patch('/games/:id', (req, res, next) => {
  knex('games')
    .where('id', req.session.user_id)
    .then((games) => {
    res.json(games);
  });
});

router.post('/players/:id', (req, res, next) => {
  knex('players')
    .where('id', req.session.user_id)
    .del()
    .then((players) => {
    res.json(players);
  });
});


module.exports = router;
