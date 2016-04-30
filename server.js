var http = require("http");
var fs = require('fs');
var port = process.env.PORT || 5000;


function start() {
  function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/html"});

	fs.readFile('form.html', function(err,data) {
		if(err) throw err;
		response.write(data);
    		response.end();
	});

  }

  http.createServer(onRequest).listen(port);
  console.log("Server has started." + port);
}

exports.start = start;

