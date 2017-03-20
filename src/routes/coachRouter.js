const app = require('express');
const router = app.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const Coach = require('../models/Coach');

router.use(bodyParser.urlencoded({extended: true}));
router.use(jsonParser);

router.get('/', function(req, res) {
  Coach
  .fetchAll()
  .then(function(coaches) {
    res.json(coaches);
  })
})

router.get('/:id', function(req, res) {
  Coach
  .where({id: req.params.id})
  .fetch({withRelated: ['teams']})
  .then(function(coaches) {
    res.json(coaches);
  })
})

module.exports = router;
