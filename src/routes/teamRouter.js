const app = require('express');
const router = app.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const Team = require('../models/Team');

router.use(bodyParser.urlencoded({extended: true}));
router.use(jsonParser);

router.get('/', function(req, res) {
  Team
  .fetchAll()
  .then(function(teams) {
    res.json(teams);
  })
})

router.get('/:id', function(req, res) {
  Team
  .where({id: req.params.id})
  .fetch({withRelated: ['coach', 'players']})
  .then(function(teams) {
    console.log(teams);
    res.json(teams);
  })
})

module.exports = router;
