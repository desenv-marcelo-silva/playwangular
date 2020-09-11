"use strict";
exports.__esModule = true;
var jsonServer = require("json-server");
// import * as fs from "fs";
// import * as http from "http";
var auth_1 = require("./auth");
var authz_1 = require("./authz");
var server = jsonServer.create();
var router = jsonServer.router("db.json");
var middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.post("/login", auth_1.handleAuthentication);
server.use("/orders", authz_1.handleAuthorization);
// Use default router
server.use(router);
// const options = {
//   cert: fs.readFileSync("./backend/keys/cert.pem"),
//   key: fs.readFileSync("./backend/keys/key.pem"),
// };
// https.createServer(options, server).listen(4205, () => {
//   console.log("JSON Server is running on https://localhost:4205");
// });
server.listen(4205, function () {
    console.log("JSON Server is running on http://localhost:4205");
});
