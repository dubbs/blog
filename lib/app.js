var path = require('path');
var Git = require('git-fs');
var underscore = require('underscore');
global._        = underscore;

module.exports = App;

function App() {
  Git(path.join(__dirname,'..'));
}

App.prototype.articles = function (callback) {
  this.files(function(files){
    callback(files);  
  });
}
App.prototype.files = function (callback) {
  return this._files(callback);
}
App.prototype._files = function (callback) {
    Git.getHead(function (err, sha) {
      Git.readDir(sha, 'articles', function (err, data) {
        callback(data['files']);
      });
    }, true);
}
App.prototype.load = function(filename, callback) {
  return this._load(filename, callback);
}
App.prototype._load = function(filename, callback) {
    Git.getHead(function (err, sha) {
      Git.readFile(sha, 'articles/'+filename, function (err, data) {
        callback(data);
      });
    }, true); 
}