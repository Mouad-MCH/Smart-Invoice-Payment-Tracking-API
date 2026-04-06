import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        min: 2
    },

    email: {
        type: String,
        trim: true,
        required: [true, 'Email is required'],
        unique: true
    },

    password: {
        type: String,
        min: [8, 'passwort must be gte 8'],
        required: [true, 'password is reauired' ]
    },

    role: {
        type: String,
        enum: ['client', 'admin'],
        default: 'client'
    }

}, { timestamps: true });


const User = mongoose.model("Users", userSchema);

export { User }
export default { User }