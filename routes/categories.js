var express = require("express");
var router = express.Router();

//Index Route
router.get("/",function(req,res){
    res.render("categories/index");
});

//New Route
router.get("/new",function(req,res){
    res.render("categories/new");
});

module.exports = router;