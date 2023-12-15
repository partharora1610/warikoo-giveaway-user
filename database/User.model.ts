import mongoose, { Schema, models } from "mongoose";

interface IUser extends mongoose.Document {
  clerkId: string;
  email: string;
  name: string;
  username: string;
  giveaways: Schema.Types.ObjectId[];

  createdAt: Date;
  updatedAt: Date;

  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };

  // wonGiveaways: Schema.Types.ObjectId[];
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  email: { type: String },
  name: { type: String },
  username: { type: String },
  createdAt: { type: Date, default: Date.now },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
  },
  updatedAt: { type: Date, default: Date.now },
  giveaways: [{ type: Schema.Types.ObjectId, ref: "Giveaway" }],
  // wonGiveaways: [{ type: Schema.Types.ObjectId, ref: "Giveaway" }],
});

const User = models.User || mongoose.model("User", UserSchema);

export default User;
