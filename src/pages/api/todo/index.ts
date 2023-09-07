// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

type TodoList = {
  id: number;
  todo: string;
  status: string | null;
  authorId: number;
};

type TodoItem = {
  todo: string;
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<TodoList>>
) {
  if (req.method === "GET") {
    const todos = await prisma.todo.findMany({});
    console.log("todos is:", todos);

    return res.json(todos);
  } else if (req.method === "POST") {
    const todoData = JSON.parse(req.body);
    const todo = todoData.todo,
      status = todoData.status;
    const todos = await createTodo(todo, status);

    return res.json(todos);
  }
}

// export async function createUser() {
//   const existingUser = await prisma.user.findUnique({
//     where: {
//       email: "asmi@dasmi.com",
//     },
//   });

//   if (existingUser) {
//     console.log("email already exist");
//     return;
//   }

//   const user = await prisma.user.create({
//     data: {
//       email: "asmi@dasmi.com",
//       name: "asmi",
//     },
//   });

//   return user;
// }

async function createTodo(todo: string, status: string) {
  const createTodo = await prisma.todo.create({
    data: {
      todo,
      status,
      authorId: 1,
    },
  });
  console.log("createTodo", createTodo);
  const allTodo = await prisma.todo.findMany({});
  console.log("allTodo", allTodo);
  return allTodo;
}
