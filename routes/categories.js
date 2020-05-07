var express = require("express");
var router = express.Router();

var Category= require("../models/category");

//Index Route
router.get("/",function(req,res){
	//Get all campground from DB
	Category.find({},function(err,allCategories){
		if(err){
			consolge.log(err);
		}
		else{
			res.render("categories/index",{categories:allCategories});
		}
	});
});

//New Route
router.get("/new",function(req,res){
    res.render("categories/new");
});

//Create Route
router.post("/",function(req,res){
    
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCategory = {name:name,image:image,description:description}
    Category.create(newCategory,function(err,newlyCreated){
        if(err){
            console.log(err);
            return res.redirect("back");
        
        }
        else{
            
            res.redirect("/categories");
        }
    });


    
});

//Show Route
router.get("/:id",function(req,res){
	//Find category with provided ID
	Category.findById(req.params.id).populate("items").exec(function(err,foundCategory){
		if(err){
			console.log(err);
		}
		else{
			//console.log(foundCategory);
			res.render("categories/show",{category:foundCategory});
		}
	});
	
});

module.exports = router;