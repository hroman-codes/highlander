const app = require('express');
const router = app.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const Player = require('../models/Player');

router.use(bodyParser.urlencoded({extended: true}));
router.use(jsonParser);

router.get('/', function(req, res) {
  Player
  .fetchAll()
  .then(function(players) {
    res.json(players);
  })
})

router.get('/:id', function(req,res) {
  Player
  .where({id: req.params.id})
  .fetch({withRelated: ['teams']})
  .then(function(players) {
    res.json(players);
  })
})

router.get('/:id/stats', function(req, res) {
  Player
  .where({id: req.params.id})
  .fetch({withRelated: ['stats','stats.catalog']})
  .then(function(stats) {
    res.json(stats);
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
       return res.status(400).send(errorMessage);
     }
   }
   // update query db via model with new params
   Player.where({id: req.params.id})
   .fetch()
   .then(function(player) {
     return player.save({
       email: req.body.email,
       first_name: req.body.first_name,
       last_name: req.body.last_name
     })
   })
   .then(function(player){
     return res.status(200).json(player)
   })
   .catch(function(err) {
     return res.status(500).json(err);
   })
 })

module.exports = router;
