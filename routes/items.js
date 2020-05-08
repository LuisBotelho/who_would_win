var express = require("express");
var router = express.Router({mergeParams:true});

var Category = require("../models/category");
var Item = require("../models/item");


//New Route
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

//Create Route
router.post("/",function(req,res){
    console.log(req.body)
    Category.findById(req.params.id,function(err,category){
        if(err){
            console.log(err);
            res.redirect("/categories");
        }
        else{
            // console.log(category);
            var name = req.body.name;
            var description = req.body.description;
            var image = req.body.image;
            var eloScore= 1400;
            var newItem = {name:name,description:description,image:image,eloScore:eloScore};
            // console.log(newItem);
            Item.create(newItem,function(err,item){
                if(err){
                    console.log(err);
                }
                else{
                    //Add username and id to comment
                    //save comment
                   
                    category.items.push(item);
                    category.save();
                    var url = "/categories/" + category._id;
                    res.redirect(url);
                }
            });
        }
    });
});

module.exports = router;