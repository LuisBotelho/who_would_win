var mongoose = require("mongoose");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

var categorySchema = new mongoose.Schema({
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
    items: [
        {
            type: mongoose.Schema.Types.ObjectID,
            ref: "Item"
        }
    ]
});

module.exports = mongoose.model("Category",categorySchema);