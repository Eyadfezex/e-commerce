const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const HF = require("./handlerFactory");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });
  return newObj; // Return the new filtered object after the loop
};

const getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

const updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError("You cannot update password here", 400));
  }
  const filteredBody = filterObj(req.body, "name", "email");
  console.log(filteredBody);
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ status: "success", data: updatedUser });
});

const deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });
  res.status(204).json({
    status: "success",
    data: null,
  });
});
const createUser = HF.createOne(User);
const getAllUsers = HF.getAll(User);
const getUser = HF.getOne(User);
// Don't update passwords with this!
const updateUser = HF.updateOne(User);
const deleteUser = HF.deleteOne(User);

module.exports = {
  getMe,
  updateMe,
  deleteMe,
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
