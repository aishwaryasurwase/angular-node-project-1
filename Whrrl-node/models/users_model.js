const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userDetailsSchema = new Schema(
    {
        name: {
            type: String,
        },
        emailID: {
            type: String,
        },
        mobileNO: {
            type: String,
        },
        nationality: {
            type: String,
        },
        imagePath: {
            type: String,
        },
    },
    { collection: "userDetails" }
);
module.exports = mongoose.model("userDetails", userDetailsSchema);
