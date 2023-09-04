// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type TodoList = {
  id: string;
  todo: string;
  status: string;
};

const todos = [
  {
    id: "1",
    todo: "Add wordpress.org instead of joomla",
    status: "Not completed",
  },
  { id: "2", todo: "second work", status: "Not completed" },
  { id: "3", todo: "yo chain third work", status: "Not completed" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<TodoList>>
) {
  if (req.method === "GET") {
    return res.status(200).json(todos);
  }
}
