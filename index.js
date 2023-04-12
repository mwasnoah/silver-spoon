const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const { PrismaClient } = require("@prisma/client");

const cors = require("cors");
const fs = require("fs");

//TODO write test for github CI
const dirname = path.resolve("./");
//middleware to mitigate cross side scripting
const server = express();

const port = process.env.PORT || 3001;
const staticDir = path.join(dirname, `public`);
const prisma = new PrismaClient();

server.use(bodyParser.json());
//server.use(bodyParser.urlencoded({extended:true}));

server.use(
  cors({
    origin: ["http://127.0.0.1:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
server.use(express.static(staticDir));

server.post("/addBlog", async (req, res) => {
  console.log({ url: req.url, body: req.body,image:req?.body?.image });
  const post = await prisma.posts.create({
    data: { title: req.body.title, content: req.body.content, },
  });

  if (post) {
    console.log("success");
    res.status(200).type("json").json({ status: "success" });
  } else if (!post) {
    console.log("error");
    res.status(200).type("json").json({ status: "error" });
  }
});
server.get("/getBlog/:id", async (req, res) => {
  console.log(req.url);
  const post = await prisma.posts.findUnique({
    where: { id: parseInt(req.params.id) },
    include: { Comment: true },
  });
  if (post) {
    res.status(200).type("json").json({ status: "success", post });
  } else if (!post) {
    res.status(200).type("json").json({ status: "error" });
  }
});
server.get("/blogs", async (req, res) => {
  //home route
  console.log(req.url);
  const posts = await prisma.posts.findMany({});
  if (posts) {
    res.status(200).type("json").json({ status: "success", posts });
  } else if (!posts) {
    res.status(404).type("json").json({ status: "error" });
  }
});
server.post("/signup", async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { email: req.body.email },
  });
  if (user) {
    res.status(200).type("json").json({ status: "user already exists" });
  } else {
    const createdUser = await prisma.user.create({
      data: {
        password: req.body.password,
        email: req.body.email,
        token: `${req.body.email}${req.body.password}`,
      },
    });
    if (createdUser) {
      res
        .status(200)
        .type("json")
        .json({
          status: "success",
          token: `${createdUser.email}${createdUser.password}`,
        });
    } else {
      res.status(404).type("json").json({ status: "error" });
    }
  }
});
server.post("/signin", async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { email: req.body.email },
  });

  if (user?.password === req.body.password) {
    await prisma.user.update({
      where: { email: req.body.email },
      data: { token: `${req.body.email}${req.body.password}` },
    });
    res
      .status(200)
      .type("json")
      .json({
        status: "success",
        token: `${user.email}${user.password}`,
      });
  } else {
    res.status(404).type("json").json({ status: "error user not found" });
  }
});
server.post("/comment", async (req, res) => {
    console.log({token: req.body.token, content: req.body.content, post_id: req.body.postId,})
  const user = await prisma.user.findFirst({
    where: { token: req.body.token },
  });
  const comment = await prisma.comment.create({
    data: {
      content: req.body.content,
      author_id: user?.id,
      post_id: parseInt(req.body.postId),
    },
  });
  if (comment) {
    res
      .status(200)
      .type("json")
      .json({ status: "comment submitted successfully" });
  } else {
    res.status(404).type("json").json({ status: "error submitting content" });
  }
});
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`); //Debug log
});
