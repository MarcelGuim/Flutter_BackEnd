import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name :{
        type: String,
        required : true
    },
    age: {
        type: Number,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    password: {
        type: String,
        required: true
    }
});

export interface IUser{
    name : string;
    age : number;
    email : string;
    password: string;
    _id?: mongoose.ObjectId;
}

const User = mongoose.model('User', userSchema);
export default User;
