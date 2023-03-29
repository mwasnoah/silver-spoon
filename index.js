const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');

const { PrismaClient } = require('@prisma/client');

const cors = require("cors");
const fs = require('fs')

//TODO write test for github CI
const dirname = path.resolve("./");
//middleware to mitigate cross side scripting 
const server = express();

const port = process.env.PORT || 3001;
const staticDir = path.join(dirname, `public`);
const prisma = new PrismaClient();



server.use(bodyParser.json());
//server.use(bodyParser.urlencoded({extended:true}));

server.use(cors({origin:["http://127.0.0.1:5173"],methods:["GET","POST"],credentials:true}))
server.use(express.static(staticDir));


server.post("/addBlog", async (req, res) => {
    console.log({url:req.url,body:req.body});
    const post = await prisma.posts.create({ data: { title: req.body.title, content: req.body.content } });
   
    if (post) {
        console.log("success")
        res
            .status(200)
            .type('json')
            .json({ status: "success" });
    } else if (!post) {
        console.log("error");
        res
            .status(200)
            .type('json')
            .json({ status: "error" });
    }

});
server.get("/getBlog", async (req, res) => {
    console.log(req.url);
    const post = await prisma.posts.findFirst({ where: { title: req.body.title } });
    if (post) {
        res
            .status(200)
            .type('json')
            .json({ status: "success" });
    } else if (!post) {
        res
            .status(200)
            .type('json')
            .json({ status: "error" });
    }
});
server.get("/blogs", async (req, res) => {
    //home route 
    console.log(req.url);
    const posts = await prisma.posts.findMany({});
    if (posts) {
        res
            .status(200)
            .type('json')
            .json({ status: "success",posts });
    } else if (!posts) {
        res
            .status(200)
            .type('json')
            .json({ status: "error" });
    }

});
server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);//Debug log 
});