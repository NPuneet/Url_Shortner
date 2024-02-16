const express = require("express");
const mongoose = require("mongoose");
const connectToDB = require("./connection");
const app = express();
const userRouter = require("./routes/index");
const URL = require("./models/urls");
const { handleShowUser } = require("./controllers/index");
const { handleGetAnalytics } = require("./controllers/index");

connectToDB("mongodb://127.0.0.1:27017/react").then(() => {
  console.log("mongoose connected");
});

app.use(express.json());

app.use("/url", userRouter);
// app.use("/:shortId", handleShowUser);

app.listen(3000, () => console.log("server running"));
