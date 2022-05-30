const Express = require("express")
const server = Express()

const port = 3000

server.get("/", (req, res) => {
    res.send("TEST")
})

server.listen(port)
console.log("Listening in the port ", port)