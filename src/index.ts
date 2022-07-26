import express from "express";
import {Request, Response} from 'express';
import mysql from 'mysql';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/details/:id", (req: Request, res: Response) => {
  res.send({
    message: "hello",
    data: req.params.id,
    name: req.params.name
  });
});

app.post("/Id/:id/Name/:name", (req: Request, res: Response) => {
  res.send({
    data: req.body,
    params: {
      id: req.params.id,
      name: req.params.name
    }
  });
});

app.listen(3000, () => {
  console.log("server running successfully on port 3000!");
});
