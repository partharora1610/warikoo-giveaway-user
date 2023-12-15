import mongoose, { Schema, models } from "mongoose";

interface IGiveaway extends mongoose.Document {
  title: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
  books?: Schema.Types.ObjectId[];
  participants: Schema.Types.ObjectId[];
  winners: Schema.Types.ObjectId[];
  maxWinners: number;
  archived: boolean;
  result: boolean;
  // bannerImage: string;
}

const GiveawaySchema = new Schema({
  title: { type: String, required: true },
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }],

  participants: [
    { type: Schema.Types.ObjectId, ref: "Participate", default: [] },
  ],

  winners: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
  maxWinners: { type: Number, required: true },

  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },

  archived: { type: Boolean, default: false },
  result: { type: Boolean, default: false },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Giveaway = models.Giveaway || mongoose.model("Giveaway", GiveawaySchema);

export default Giveaway;
