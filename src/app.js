// this file is all about setting up the express application with the right middleware
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello from Acquisitions!");
});

export default app;
