var app = require('../lib/app')
var should = require('should')

describe('parser', function(){
  it('exists', function(){
    app.version.should.equal('0.1')
  });
});