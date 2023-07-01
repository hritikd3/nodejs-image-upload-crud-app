//import
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 5500;

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); 

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(session({
    secret : "my secret key",
    saveUninitialized: true,
    resave : false,
}))
app.use((req,res,next)=>{
res.locals.message= req.session.message;
delete req.session.message;
next();
}
)
//set template engine
app.removeAllListeners("view engine", "ejs")
//database connection
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connnected to the database"));

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(PORT, () => {
  console.log(`app is listening on localhost://${PORT}`);
});
