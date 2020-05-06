var express        = require("express")
    app            = express(),
	methodOverride = require("method-override"),
	mongoose       = require("mongoose");

app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

var indexRoutes = require("./routes/index"),
	categoryRoutes = require("./routes/categories");
	
//Mongoose setup
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

var db_url = process.env.DATABASEURL || "mongodb://localhost/who_would_win";
mongoose.connect(db_url);


app.use("/",indexRoutes);
app.use("/categories",categoryRoutes);

var heroku_var = process.env.HEROKU || '0';
if(heroku_var === '0'){
	app.listen(3000,function(){
		console.log("Running on port 3000.")
	});
}
else{
	app.listen(process.env.PORT,process.env.IP);
}