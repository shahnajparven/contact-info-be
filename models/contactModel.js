import mongoose, { model, Schema } from "mongoose";

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please Enter cname"],
  },
  email: {
    type: String,
    required: [true, "Please Enter email"],
  },
  message: {
    type: String,
    required: [true, "Please Enter message"],
  },
  createdBy: {
    type: String,
    default: 0,
  },
  createdAt: {
    type: String,
    default: 0,
  },
});
export const Contact = model("Contact", contactSchema);
