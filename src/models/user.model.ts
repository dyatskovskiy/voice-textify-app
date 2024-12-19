import { Document, Schema, model, models } from "mongoose";

export interface IUser extends Document {
  id: string;
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    clerkId: { type: String, required: true, unique: true },

    email: { type: String, required: true },
    firstName: String,
    lastName: String,
    createdAt: { type: Date, default: Date.now() },
  },
  {
    timestamps: true,
  }
);

const UserModel = models.User || model<IUser>("User", UserSchema);

export default UserModel;
