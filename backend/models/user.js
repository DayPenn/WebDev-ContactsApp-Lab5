const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String, 
        required: true, 
        // should not be unique b/c passwords can be the same, not usernames
    },
});

const User = mongoose.model("User", userSchema, "users");
module.exports = User;