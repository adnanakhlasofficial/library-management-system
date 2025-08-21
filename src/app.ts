import express, { Request, Response } from "express";
import routes from "./app/routes";

const app = express();

app.use(express.json());

app.use(routes);

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Library Management System.");
});

export default app;
