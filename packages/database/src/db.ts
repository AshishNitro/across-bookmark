import mongoose, {model, Schema} from "mongoose";
 

mongoose.connect("mongodb://localhost:27017/bookmark");

const UserSchema = new Schema({
    username: {type: String, unique: true},
    pasword: String
})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: "Tag"}],
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: "User", required: true},
})

export const ContentModel = model("Content", ContentSchema);

const LikeSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },

})

export const LikeModel = model("Like", LikeSchema);
