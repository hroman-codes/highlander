const app = require('express');
const router = app.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const Player = require('../models/Player');

router.use(bodyParser.urlencoded({extended: true}));
router.use(jsonParser);

router.get('/', function(req, res) {
  Player.fetchAll().then(function(players) {
    res.json(players);
  }) // <== player is my model, am I targeting this the right way?
})

module.exports = router;
