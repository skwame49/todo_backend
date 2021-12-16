const mongoose= require("mongoose");


const dbURI = "mongodb+srv://skwame:7Bjx55sinzdPWb3@cluster0.yn34x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(result) {
        console.log('Database is connected');
    })
    .catch((err) => console.log(err));