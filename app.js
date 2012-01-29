var http = require('http');
var App = require('./lib/app');
var md = require("node-markdown").Markdown;

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  var app = new App;
  app.articles(function(articles) {
	  _.each(articles, function(article){
	  	app.load(article, function(content) {
	  		response.end(md(content.toString()));
	  	});
	  });
  });
  
}).listen(3000);
