const app = require('express');
const router = app.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {Stat, Stat_Catalog} = require('../models/Stat')

router.use(bodyParser.urlencoded({extended: true}));
router.use(jsonParser);

router.get('/', function(req, res) {
  Stat
  .fetchAll()
  .then(function(stats) {
    res.json(stats);
  })
})

module.exports = router;
