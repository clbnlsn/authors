const mongoose = require('mongoose');

const database = "authors_db";
mongoose.connect(`mongodb://localhost/${database}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(res => console.log("you are now in the mainframe"))
    .catch(err => console.log(`error is ${err}`));