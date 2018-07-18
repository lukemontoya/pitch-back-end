const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res) {
  knex('players')
    .then((players) => {
    res.json(players);
  });
});

router.post('/', (req, res, next) => {
  knex('players')
    .insert({
      player_name: req.body.player_name,
      player_email: req.body.player_email,
      password: req.body.password,
      })
    .then((players) => {
    res.json(players);
  });
});

router.patch('/players/:id', (req, res, next) => {
  knex('players')
    .where('id', req.session.user_id)
    .then((players) => {
    res.json(players);
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
