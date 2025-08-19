import { Router } from "express";
import booksRouter from "../modules/books/books.route";

const routes = Router();

routes.use("/api/books", booksRouter);

export default routes;
