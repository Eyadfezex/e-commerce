// eslint-disable-next-line import/no-extraneous-dependencies
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/userModel");

const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    passReqToCallback: true,
  },
  async (request, accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        user = await User.create({
          googleId: profile.id,
          email: profile.emails[0].value,
          name: profile.displayName,
        });
      }

      // Pass the user object to the next middleware
      return done(null, profile);
    } catch (error) {
      // Handle errors during authenticate ion
      return done(error, null);
    }
  }
);

module.exports = googleStrategy;
