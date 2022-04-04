const path = require("path")
const express = require("express")
const app = express()
//const publicPath = path.join(__dirname,"..","public");

const commonPaths = require('../build-utils/common-paths');
const port =process.env.PORT || 3001;


app.use(express.static(commonPaths.outputPath));

app.get("*", (req,res)=>{
    res.sendFile(path.join(commonPaths.outputPath, "index.html"))
})

app.listen(port, ()=>{
    console.log("server is up!");
})