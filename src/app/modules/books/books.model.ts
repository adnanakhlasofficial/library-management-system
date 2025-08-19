import { model, Schema } from "mongoose";
import { IBook } from "./books.interface";
import generateISBN from "../../utils/generateISBN";

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    copies: { type: Number, required: true },
    available: { type: Boolean },
    description: { type: String, trim: true },
    genre: {
      type: String,
      enum: {
        values: [
          "FICTION",
          "NON_FICTION",
          "SCIENCE",
          "HISTORY",
          "BIOGRAPHY",
          "FANTASY",
        ],
      },
    },
    isbn: {
      type: String,
      required: [true, "ISBN ID is a required field."],
      unique: [true, "ISBN ID Must be and unique number"],
      default: generateISBN,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Book = model("books", bookSchema);

export default Book;
