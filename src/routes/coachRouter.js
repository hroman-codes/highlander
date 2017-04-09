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
  .fetch({withRelated: ['teams', 'teams.players', 'teams.players.stats', 'teams.players.stats.catalog']})
  .then(function(coaches) {
    res.json(coaches);
  })
})

router.put('/:id', function(req, res) {
  // check to see if the proper params is equal to what the user is inputting
  const updateParams = ['email', 'first_name', 'last_name']
  for(var i = 0; i < updateParams.length; i++) {
    const confirmedParams = updateParams[i];
    if(!(confirmedParams in req.body)) {
      const errorMessage = `Sorry your missing ${confirmedParams} please try again`
      console.error(errorMessage);
      return res.status(400).send(errorMessage)
    }
  }
  // update query db via model with new params
  Coach
  .where({id: req.params.id})
  .fetch()
  .then(function(coach) {
    return coach.save({
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name
    })
  })
  .then(function(coach){
    return res.status(200).json(coach)
  })
  .catch(function(err) {
    return res.status(500).json(err)
  })
})

router.post('/:id', function(req, res) {
  const postParams = ['email', 'first_name', 'last_name']
  for (var i = 0; i < postParams.length; i++) {
    const confirmPostParams = postParams[i];
    if(!(confirmPostParams in req.body)) {
      const errorMessage = `Sorry your missing ${confirmedParams} please try again`
      console.error(errorMessage);
      return res.status(400).send(errorMessage)
    }
  }

  Coach
  .forge({
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name
  })
  .save()
  .then(function(coach){
    return res.status(200).json(coach);
  })
  .catch(function(err){
    return res.status(500).json(err);
  })
})

module.exports = router;
