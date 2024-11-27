// eslint-disable-next-line import/no-extraneous-dependencies
const passport = require("passport");
const googleStrategy = require("./googlestrategy");
const User = require("../models/userModel");

// Use the Google strategy
passport.use(googleStrategy);

// Serialize the user information (store in session)
passport.serializeUser((user, done) => {
  done(null, user.id); // Store the user ID in the session
});

// Deserialize the user (retrieve the user from the DB using the stored ID)
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user); // Attach user object to the session
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;
