const mongoose = require('mongoose');

var url = "mongodb+srv://vaibhav:<Atlas123>@cryptotutorials.pvi18.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

exports.connect = () => {
    mongoose.connect(url, () => {
        // if (error) {
        //     console.log(error)
        // } else {
        //     console.log("successfully connected")
        // }

    })
        .then(() => {
            console.log("conn succ")
        })
        .catch((error) => {
            console.log(error)
        })
}

