const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res) {
  knex('cards')
    .then((cards) => {
    res.json(cards);
  });
});

router.post('/', (req, res, next) => {
  knex('cards')
    .insert({
      material: req.body.material,
      object: req.body.object,
      issue: req.body.issue,
      })
    .then((cards) => {
    res.json(cards);
  });
});

router.patch('/cards/:id', (req, res, next) => {
  knex('cards')
    .where('id', req.session.user_id)
    .then((cards) => {
    res.json(cards);
  });
});

router.post('/cards/:id', (req, res, next) => {
  knex('cards')
    .where('id', req.session.user_id)
    .del()
    .then((cards) => {
    res.json(cards);
  });
});


module.exports = router;
