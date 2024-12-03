const crypto = require("crypto");
const { promisify } = require("util");
// eslint-disable-next-line import/no-extraneous-dependencies
const jwt = require("jsonwebtoken");
// eslint-disable-next-line import/no-extraneous-dependencies
const { OAuth2Client } = require("google-auth-library");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const sendEmail = require("../utils/email");

const CLIENT_ID = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const signToken = function (user) {
  return jwt.sign(
    {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  // Remove password from the output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

const OAuth2G = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized", message: "Token is missing" });
    }

    // Verify the ID token
    const ticket = await CLIENT_ID.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    // Validate payload structure
    if (!payload || !payload.email || !payload.sub) {
      return res
        .status(400)
        .json({ error: "Bad Request", message: "Invalid token payload" });
    }

    // Check if the token is expired
    const now = Math.floor(Date.now() / 1000);
    if (payload.exp < now) {
      return res
        .status(401)
        .json({ error: "Unauthorized", message: "Token has expired" });
    }
    // console.log("User Payload:", payload);

    // Check if the user already exists in the database
    let user = await User.findOne({ email: payload.email });

    if (!user) {
      // Generate a secure random password for new users
      const randomPassword = crypto.randomBytes(16).toString("hex");

      // Create a new user
      user = new User({
        googleId: payload.sub,
        email: payload.email,
        name: payload.name,
        password: randomPassword,
        passwordConfirm: randomPassword,
      });
      await user.save();
    }

    // Generate your application's session token
    createSendToken(user, 200, res);
  } catch (err) {
    // console.error("OAuth2G Error:", err);

    // Handle specific error types for better debugging
    if (err.message.includes("Token used too late")) {
      return res
        .status(401)
        .json({ error: "Unauthorized", message: "Expired or invalid token" });
    }

    return res
      .status(500)
      .json({ error: "Internal Server Error", message: err.message });
  }
};

<<<<<<< HEAD
// const loginOAuth2G = async (req, res) => {
//   try {
//     // eslint-disable-next-line prefer-destructuring
//     const token = req.body.token;
//     if (!token) {
//       return res
//         .status(401)
//         .json({ error: "Unauthorized", message: "Token is missing" });
//     }

//     // Verify the ID token
//     const ticket = await CLIENT_ID.verifyIdToken({
//       idToken: token,
//       audience: process.env.GOOGLE_CLIENT_ID,
//     });

//     const payload = ticket.getPayload();

//     // Validate payload structure
//     if (!payload || !payload.email || !payload.sub) {
//       return res
//         .status(400)
//         .json({ error: "Bad Request", message: "Invalid token payload" });
//     }

//     // Check if the token is expired
//     const now = Math.floor(Date.now() / 1000);
//     if (payload.exp < now) {
//       return res
//         .status(401)
//         .json({ error: "Unauthorized", message: "Token has expired" });
//     }
//     // console.log("User Payload:", payload);

//     // Check if the user already exists in the database
//     const user = await User.findOne({ email: payload.email });

//     if (!user) {
//       return res.status(401).json({
//         error: "Unauthorized",
//         message: "User not found. please signup",
//       });
//     }

//     // Generate your application's session token
//     createSendToken(user, 200, res);
//   } catch (err) {
//     // console.error("OAuth2G Error:", err);

//     // Handle specific error types for better debugging
//     if (err.message.includes("Token used too late")) {
//       return res
//         .status(401)
//         .json({ error: "Unauthorized", message: "Expired or invalid token" });
//     }

//     return res
//       .status(500)
//       .json({ error: "Internal Server Error", message: err.message });
//   }
// };

// const signupOAuth2G = async (req, res) => {
//   try {
//     // Validate request body
//     // eslint-disable-next-line prefer-destructuring
//     const token = req.body.token;
//     if (!token) {
//       return res.status(401).json({
//         status: "fail",
//         message: "Token is missing. Please provide a valid token.",
//       });
//     }

//     // Verify Google ID token
//     const ticket = await CLIENT_ID.verifyIdToken({
//       idToken: token,
//       audience: process.env.GOOGLE_CLIENT_ID,
//     });

//     const payload = ticket.getPayload();

//     // Validate payload structure
//     if (!payload || !payload.email || !payload.sub) {
//       return res.status(400).json({
//         status: "fail",
//         message: "Invalid token payload. Please try again.",
//       });
//     }

//     // Check token expiration
//     const now = Math.floor(Date.now() / 1000);
//     if (payload.exp < now) {
//       return res.status(401).json({
//         status: "fail",
//         message: "Token has expired. Please log in again.",
//       });
//     }

//     // Check if the user already exists
//     const existingUser = await User.findOne({ email: payload.email });
//     if (existingUser) {
//       return res.status(400).json({
//         status: "fail",
//         message: "User already exists. Please log in instead.",
//       });
//     }

//     // Generate a secure random password for new users
//     const randomPassword = crypto.randomBytes(16).toString("hex");

//     // Create a new user
//     const user = await User.create({
//       googleId: payload.sub,
//       email: payload.email,
//       name: payload.name,
//       password: randomPassword,
//       passwordConfirm: randomPassword,
//     });

//     // Send the token and user details
//     createSendToken(user, 201, res);
//   } catch (err) {
//     console.error("signupOAuth2G Error:", err);

//     // Handle specific errors for better debugging
//     if (err.message.includes("Token used too late")) {
//       return res.status(401).json({
//         status: "fail",
//         message: "Expired or invalid token. Please try again.",
//       });
//     }

//     res.status(500).json({
//       status: "error",
//       message: "Internal Server Error. Please try again later.",
//     });
//   }
// };

=======
>>>>>>> b43aa8560d38918ea456aef1005ad8901400c1b9
const signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  createSendToken(newUser, 201, res);
});
//
const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }
  // 2) Check if user exists && password is correct
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }
  // 3) If everything ok, send token to client
  createSendToken(user, 200, res);
});
//
const protect = catchAsync(async (req, res, next) => {
  // 1) getting token and check if it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log on to get access.", 401)
    );
  }
  // 2) Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(new AppError("User no longer exists", 401));
  }
  // 4) Check if user changed password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError("User recently changed password! Please log in again.", 401)
    );
  }

  // Grant access to protected route
  req.user = currentUser;
  next();
});
//
const restrictTo = function (...roles) {
  return catchAsync(async (req, res, next) => {
    // roles ['admin','seller'].role='user'
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }
    next();
  });
};

const forgotPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on POSTed email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("There is no user with that email address", 404));
  }
  // 2) Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });
  // 3) send it to user's email
  const resetURL = `${req.protocol}://${req.get("host")}/api/v1/users/resetPassword/${resetToken}`;
  const message = `Forgot your password? Reset it here: ${resetURL}.\nIf you didn't forget your password, please ignore this email. `;
  // eslint-disable-next-line no-console
  console.log(message);
  try {
    await sendEmail({
      to: user.email,
      subject: "Your password reset token is valid for 10 minutes.",
      text: message,
    });
    res.status(200).json({
      status: "success",
      message: "Token sent to email",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError("There was an error sending the email. Try again later!"),
      500
    );
  }
});

const resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on the come from URL
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    // passwordResetExpires: { $gt: Date.now() },
  });
  // 2) If token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError("Token is invalid or has expired", 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  // 3) Update changedPasswordAt property for the user
  // Do it in userModel.js
  // 4) Log the user in, send JWT token
  createSendToken(user, 200, res);
});

const updatePassword = catchAsync(async (req, res, next) => {
  // 1) Get user from collection
  const user = await User.findById(req.user.id).select("+password");
  // 2) Check if POSTed current password is correct
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError("Your current password is wrong.", 401));
  }
  // 3) If so, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  // 4) Log user in, send JWT token
  createSendToken(user, 200, res);
});

const setSeller = (req, res, next) => {
  if (!req.body.seller) {
    req.body.seller = req.user.id; // Set the seller to the current user's ID
  }
  next(); // Proceed to the next middleware or route handler
};

module.exports = {
  signup,
  login,
  protect,
  restrictTo,
  forgotPassword,
  resetPassword,
  updatePassword,
  setSeller,
  OAuth2G,
<<<<<<< HEAD
  // loginOAuth2G,
  // signupOAuth2G,
=======
  // googleCallback,
>>>>>>> b43aa8560d38918ea456aef1005ad8901400c1b9
};
