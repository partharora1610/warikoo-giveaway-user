import mongoose, { Schema, models } from "mongoose";

interface IBook extends mongoose.Document {
  name: string;
  author: string;
  giveaway: Schema.Types.ObjectId;
}

const BookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  giveaway: { type: Schema.Types.ObjectId, ref: "Giveaway" },
});

const Book = models.Book || mongoose.model("Book", BookSchema);

export default Book;
