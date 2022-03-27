let express = require("express")
let mongodb = require("mon")

let app = express()

app.get("/", function(req, res){
    res.send("Hello welcome to server2")
})

app.listen(3000)