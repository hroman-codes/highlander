const app = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const player = require('../models/Player');

app.use(bodyParser.urlencoded({extended: true}));
app.use(jsonParser);

router.get('/', function(req, res) => {
  res.json(player.get());
})

module.exports = router;
