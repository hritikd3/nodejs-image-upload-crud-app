require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 5500;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "my secret key",
    resave: false,
    saveUninitialized: true,
  })
);

// Database connection
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.error(error));

// Set template engine
app.set("view engine", "ejs");

// Routes
const routes = require("./routes/routes");
app.use("/", routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Start the server
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
   