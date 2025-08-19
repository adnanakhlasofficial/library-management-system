import express, { Request, Response } from "express";
import routes from "./app/routes";

const app = express();

app.use(express.json());

app.use(routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Library Management System.");
});

export default app;
