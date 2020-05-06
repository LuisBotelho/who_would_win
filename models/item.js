var mongoose = require("mongoose");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

var itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    // author:{
    //     id:{
    //         type: mongoose.Schema.Types.ObjectID,
    //         ref: "User2"
    //     },
    //     username: String
    // },
        
    eloScore: Number
})