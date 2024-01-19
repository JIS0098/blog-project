import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    content: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.models["Post"] || mongoose.model("Post", postSchema);

export default Todo;
