const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();

chai.use(chaiHttp);

const app = require('../server');

describe('root html test', function() {

  it('should respond with 200 status & html', function() {
    chai.request(app)
    .get('/')
    .then(res => {

      res.status.should.be(200);
      res.should.be.html;
      // done();
    })
})
