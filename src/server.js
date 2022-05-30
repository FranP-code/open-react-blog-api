const express = require("express");
const server = express()

const port = 3000

const path = require("path");

server.use(express.static(path.resolve('public')));

const index = require('./routes/index.js')
server.use("/", index)

server.listen(port)
console.log("Listening in the port ", port)