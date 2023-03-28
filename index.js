const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');//midlldeware to handle form data 


//TODO write test for github CI
const dirname = path.resolve("./");
//middleware to mitigate cross side scripting 
const server = express();
const port = process.env.PORT || 3001;
const staticDir = path.join(dirname, `public`); 



server.use(bodyParser.urlencoded({
    extended: false
}));
server.use(express.json());//json middleware 
server.use(express.static(staticDir));
console.log(dirname);

server.get("/", (req, res) => {
    //home route 
    res
        .status(200)
        .type(".html")
        .sendFile(path.join(dirname, "public", "index.html"));

});
server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);//Debug log 
});