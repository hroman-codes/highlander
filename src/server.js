const express = require('express');
const morgan = require('morgan');

const app = express();

const playerRouter = require('./routes/playerRouter');
const coachRouter = require('./routes/coachRouter');
const teamRouter = require('./routes/teamRouter');
const statRouter = require('./routes/statRouter');

app.use(morgan('common'));
app.use(express.static('public'));

app.use('/players', playerRouter);
app.use('/coaches', coachRouter);
app.use('/teams', teamRouter);
app.use('/stats', statRouter);
app.use('/stats', playerRouter);

let server;

function runServer() {
  const port = process.env.PORT || 8080;
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`Your app is listening on port ${port}`);
      resolve(server);
    })
    .on('error', err => {
      reject(err)
    });
  });
}

function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if(err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};
