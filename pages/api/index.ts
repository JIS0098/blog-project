import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../db/models/dbConnect";
import Post from "../../db/models/Post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === "POST") {
    const newData = await Post.create(req.body);
    return res.status(201).json(newData);
  }

  if (req.method === "GET") {
    const data = await Post.find();
    return res.status(200).json(data);
  }
  if (req.method === "DELETE") {
    const { id } = req.query;
    const deleted = await Post.findByIdAndDelete(id);
    return res.json(deleted);
  }
}
