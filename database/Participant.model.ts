import mongoose, { Schema, models } from "mongoose";

interface IParticipate extends mongoose.Document {
  user: Schema.Types.ObjectId;
  book: Schema.Types.ObjectId;
  giveaway: Schema.Types.ObjectId;
}

const ParticipateSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  book: { type: Schema.Types.ObjectId, ref: "Book" },
  giveaway: { type: Schema.Types.ObjectId, ref: "Giveaway" },
});

const Participate =
  models.Participate || mongoose.model("Participate", ParticipateSchema);

export default Participate;
