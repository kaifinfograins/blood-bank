const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const path = require("path")
const { default: mongoose } = require("mongoose");
const frontendRouter = require("./routes/fontendRouter")
const backendRouter = require("./routes/backendRouter")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file
app.use(express.static(path.join(__dirname,"../assets")))


app.use("/",frontendRouter)
app.use("/api",backendRouter)

// mongoose connection
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://0.0.0.0:27017/BloodBank", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully!");
  });

app.listen(8000, () => {
  console.log(`server running on port : http://localhost:8000`);
});
