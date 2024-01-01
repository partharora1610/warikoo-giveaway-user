import mongoose, { Schema, models } from "mongoose";

interface IUser extends mongoose.Document {
  clerkId: string;
  email: string;
  name: string;
  giveaways: Schema.Types.ObjectId[];

  createdAt: Date;
  updatedAt: Date;

  address: {
    contactNumber: string;
    street: string;
    country: string;
    city: string;
    state: string;
    pincode: string;
    houseNumber: string;
    landmark: string;
  };
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  email: { type: String },
  name: { type: String },
  giveaways: [{ type: Schema.Types.ObjectId, ref: "Giveaway" }],

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },

  address: {
    contactNumber: { type: String },
    country: { type: String },
    street: { type: String },
    state: { type: String },
    pincode: { type: String },
    city: { type: String },
    houseNumber: { type: String },
    landmark: { type: String },
  },
});

const User = models.User || mongoose.model("User", UserSchema);

export default User;
