var App = require('../lib/app');
var should = require('should')


describe('app', function() {
  var app = new App;
  it('#files - returns a listing of files', function(done) {
    app._files = function(callback) { callback(['file1','file2']);  };
    app.files(function(result){
      result.should.eql(['file1','file2']);
      done();
    });
  });
  it('#load - loads a file', function(done) {
    app._load = function(filename, callback) { callback('Content') };
    app.load('file1', function(result){
      result.should.equal('Content');
      done();
    });
  });
});