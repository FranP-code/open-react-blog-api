//.env File config
require('dotenv').config();

const express = require("express");
const server = express()

const port = process.env.PORT || 3000

//Accept with JSON files
server.use(express.json())

//Solve CORS problem
const cors = require("cors")
server.use(cors())

//Serve public for CSS files
const path = require("path");
server.use(express.static(path.resolve('public')));

//Define favicon
const favicon = require('serve-favicon');
server.use(favicon(path.resolve('public/images/favicon.ico')));

const index = require('./routes/index.js')
server.use("/", index)

const user = require('./routes/user.js')
server.use("/user", user)

server.listen(port)
console.log("Listening in the port", port)