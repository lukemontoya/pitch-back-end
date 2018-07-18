const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res) {
  knex('rounds')
    .then((rounds) => {
    res.json(rounds);
  });
});

router.post('/', (req, res, next) => {
  knex('rounds')
    .insert({
      player_1: req.body.player_1,
      player_2: req.body.player_2,
      player_3: req.body.player_3,
      player_4: req.body.player_4,
      winner: req.body.winner,
      judge: req.body.judge,
      game_id: req.body.game_id,
      })
    .then((rounds) => {
    res.json(rounds);
  });
});

router.patch('/rounds/:id', (req, res, next) => {
  knex('rounds')
    .where('id', req.session.user_id)
    .then((rounds) => {
    res.json(rounds);
  });
});

router.post('/rounds/:id', (req, res, next) => {
  knex('rounds')
    .where('id', req.session.user_id)
    .del()
    .then((rounds) => {
    res.json(rounds);
  });
});


module.exports = router;
