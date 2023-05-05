import {Schema, model , models} from "mongoose";

const BlogSchema = new Schema({
    title: String,
    description: String,
    avtar: String,
    date: String,
    tag: String
});

const Posts = models.posts || model("posts", BlogSchema);

export default Posts;