import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    auth0Id : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
    },
    picture : {
        type: String,
        required: false,
    },
    name : {
        type: String,
        required: false,
    },
    addressLine1 : {
        type: String,
        required: false,
    },
    city : {
        type: String,
        required: false,
    },
    country : {
        type: String,
        required: false,
    },

})

const User = mongoose.model("user", userSchema);

export default User;