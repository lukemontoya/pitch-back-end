const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
/* GET users to create game */
router.get('/game', function(req, res) {
  res.render('create_game', { title: 'users' });
});
/* POST users to join game */
router.post('/game', function(req, res) {
  res.render('join_game', { title: 'users' });
});
/* PATCH something */
router.patch('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
/* DEL user */
router.delete('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
