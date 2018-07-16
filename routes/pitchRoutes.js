const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/cards', (req, res, next) => {
  knex('cards')
    .then((cards) => {
    res.send(cards.rows);
  });
});

module.exports = router;
