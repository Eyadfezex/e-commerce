/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

// Replace with your Google Client ID and Secret
const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID";
const GOOGLE_CLIENT_SECRET = "YOUR_GOOGLE_CLIENT_SECRET";

// Mock database for user storage
const users = [];

// Serialize and deserialize user for session management
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  const user = users.find((user) => user.id === id);
  done(null, user);
});

// Configure Google strategy
passport.use();
const googleStrategy = new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  },
  (accessToken, refreshToken, profile, done) => {
    // Check if user exists in the database
    let user = users.find((user) => user.googleId === profile.id);

    if (!user) {
      // Create new user if not found
      user = {
        id: users.length + 1,
        googleId: profile.id,
        email: profile.emails[0].value,
        name: profile.displayName,
        photo: profile.photos[0].value,
      };
      users.push(user);
    }

    // Pass user to the next middleware
    return done(null, user);
  }
);
// Middleware for Passport
app.use(
  require("express-session")({
    secret: "SECRET",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
