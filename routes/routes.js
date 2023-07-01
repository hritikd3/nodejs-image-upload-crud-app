const express = require("express");
const router = express.Router();
const User = require("../models/users");
const multer = require("multer");
const fs = require("fs");

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: "./uploads", 
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "_" + uniqueSuffix + "_" + file.originalname);
  },
});
const upload = multer({ storage }).single("image");

// Route for adding a user to the database
router.post("/add", upload, async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email, 
      phone: req.body.phone,
      image: req.file.filename,
    }); 
    await user.save();
    req.session.message = { 
      type: "success",
      message: "User added successfully",
    }; 
    res.redirect("/");
  } catch (err) {
    console.error(err);
    req.session.message = {
      type: "danger",
      message: "Failed to add user",
    };
    return res.status(500).redirect("/");
  }
});

// Route for rendering the index page
router.get("/", async (req, res) => {
  try {
    const users = await User.find(); // Fetch users from the database
    const message = req.session.message; // Retrieve the message from the session
    delete req.session.message; // Remove the message from the session

    res.render("index", {
      title: "Home Page",
      users: users, // Pass the users data to the view
      message: message, // Pass the message to the view
    });
  } catch (err) {
    console.error(err);
    req.session.message = {
      type: "danger",
      message: "Failed to fetch users",
    };
    res.redirect("/");
  }
});


// // Route for deleting a user from the database
// router.delete("/delete/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Delete the associated image file
//     fs.unlinkSync(`./uploads/${user.image}`);
    
//     console.log(user)
//     await user.remove();
//     console.log(user)

//     req.session.message = {
//       type: "success",
//       message: "User deleted successfully",
//     };

//     res.redirect("/");
//   } catch (err) {
//     console.error(err);
//     req.session.message = {
//       type: "danger",
//       message: "Failed to delete user",
//     };
//     res.redirect("/");
//   }
// });

// Route for rendering the add_users page
router.get("/add", (req, res) => {
  res.render("add_users", {
    title: "User Page",
  });
});

module.exports = router;
