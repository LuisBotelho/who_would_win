var express = require("express");
var router = express.Router({mergeParams:true});

var Category = require("../models/category");
var Item = require("../models/item");

router.get("/new",function(req,res){
	Category.findById(req.params.id,function(err,category){
        console.log(req.params.id)
		if(err){
			console.log(err);
		}
		else{
            console.log(category.name)
			res.render("items/new",{category:category});
		}
	})   
});

module.exports = router;