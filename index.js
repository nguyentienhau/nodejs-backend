"use strict";

const env = require("./.env.json");

for (const key in env) {
	process.env[key] = env[key];
}


require("./custom")
const fs = require("fs");
const https = require("https");
const routes = require("./routes");

https.createServer({
	key: fs.readFileSync("./server.key"),
	cert: fs.readFileSync("./server.cert")
}, function (request, response) {
	response.writeHead(200, { "content-type": "application/json" });
	console.log(request, response);
	response.write(JSON.stringify({test: "test"}));
	response.end();
}).listen(5000);
