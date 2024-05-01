import { Contact } from "../models/contactModel.js";
import catchAsync from "../utils/catchAsync.js";

// create Course
export const createContact = catchAsync(async (req, res) => {
  const courses = await Contact.create(req.body);

  res.status(201).json({
    courses,
    status: "success",
    message: "Course Created Successfully",
  });
});

