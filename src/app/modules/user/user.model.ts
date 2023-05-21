import { Model, Schema, model } from "mongoose";
import { IUserMethods, IUser } from "./user.interface";

type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  dateOfBirth: { type: String },
  gender: { type: String, enum: ["male", "female"] },
  email: { type: String },
  contactNo: { type: String, required: true },
  emerganceyContactNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
});

userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});

const User = model<IUser, UserModel>("User", userSchema);

export default User;