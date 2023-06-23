const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
// Replace these values with your own Google OAuth credentials
const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID";
const GOOGLE_CLIENT_SECRET = "YOUR_GOOGLE_CLIENT_SECRET";
const CALLBACK_URL = "";

// MongoDB connection URI
const MONGODB_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@films.2npglwx.mongodb.net/?retryWrites=true&w=majority`;

// Connect to MongoDB
MongoClient.connect(MONGODB_URI, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Connected to MongoDB");

  // Define user schema and model
  const userSchema = new client.db().collection("users");

  // Configure Google OAuth
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: CALLBACK_URL,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          // Check if the user exists in the database
          const existingUser = await userSchema.findOne({
            googleId: profile.id,
          });
          if (existingUser) {
            return done(null, existingUser);
          }

          // Create a new user if not found
          const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
          };
          const result = await userSchema.insertOne(newUser);
          done(null, result.ops[0]);
        } catch (error) {
          done(error, null);
        }
      }
    )
  );

  // Configure Passport session serialization
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await userSchema.findOne({ _id: id });
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });

  // Initialize Passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Define routes
  app.get("/", (req, res) => {
    res.send("Welcome to the login page");
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
      // Successful authentication, redirect to the dashboard or home page
      res.redirect("/dashboard");
    }
  );

  app.get("/dashboard", (req, res) => {
    if (req.user) {
      res.send(`Welcome, ${req.user.displayName}! This is your dashboard.`);
    } else {
      res.redirect("/login");
    }
  });

  app.get("/login", (req, res) => {
    res.send("Please login with Google");
  });

  // Start the server
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
});
