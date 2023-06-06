const express = require("express")
const frontendRouter = express.Router()

// index page
frontendRouter.get("/", function (req, res) {
    res.render("pages/index");
  });
  
  frontendRouter.get("/login", function (req, res) {
    res.render("pages/login");
  });
  
  frontendRouter.get("/signup", function (req, res) {
    res.render("pages/signup");
  });

  // about page
  frontendRouter.get("/about", function (req, res) {
    res.render("pages/about");
  });

module.exports=frontendRouter;