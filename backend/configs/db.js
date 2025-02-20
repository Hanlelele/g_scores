const mongoose = require("mongoose");

const connectToDB = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log('Connected to database ')
        })
        .catch((err) => {
            console.error(`Error connecting to the database. \n${err}`);
        });
}

module.exports = connectToDB;