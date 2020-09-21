const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "hey you need an author"],
        minlength: [3, "authors need three characters at least"]
    }
},{timestamps:true})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;