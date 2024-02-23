import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    content: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.models["Post"] || mongoose.model("Post", postSchema);

export default Post;
