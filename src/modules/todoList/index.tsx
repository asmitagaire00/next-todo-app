import React, { useEffect, useState } from "react";

import TodoItem from "@/modules/todoItem";
import Button from "@/components/button";
// import { createUser } from "@/pages/api/todo";

interface Items {
  id: string;
  todo: string | undefined;
  status: string;
}

const TodoList = () => {
  const [todoList, setTodoList] = useState<Array<Items>>([]);
  const [todo, setTodo] = useState<string | undefined>("");

  const [editTodoId, setEditTodoId] = useState<string | undefined>("");

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await fetch("api/todo");
        const data = await response.json();
        setTodoList(data);
      } catch (error) {
        console.log("error is:", error);
      }
    };
    fetchedData();
  }, []);

  const addTodoList = async (todoItem: {
    id: string;
    todo: string | undefined;
    status: string;
  }) => {
    try {
      const response = await fetch("api/todo", {
        method: "POST",
        body: JSON.stringify(todoItem),
      });

      const data = await response.json();
      console.log("data", data);
      setTodoList([...todoList, todoItem]);
    } catch (error) {
      console.log("error is:", error);
    }

    // setTodoList([
    //   ...todoList,
    //   { id: todoItem.id, todo: todoItem.todo, status: todoItem.status },
    // ]);
  };

  const handleEditTodo = (todoId: string) => {
    setEditTodoId(todoId);
  };

  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const saveEditedTodo = (itemId: string) => {};

  // const handleCreateUser = async () => {
  //   try {
  //     const user = await createUser();
  //     if (user) {
  //       console.log(user);
  //     } else {
  //       console.log("user already exixt");
  //     }
  //   } catch (error) {
  //     console.log("no user", error);
  //   }
  // };

  return (
    <div className="flex flex-col ">
      {/* <Button onClick={handleCreateUser} buttonName="Create user" /> */}
      <TodoItem todo={todo} setTodo={setTodo} addTodoList={addTodoList} />
      <div className="mt-10">
        {todoList.map((item) => (
          <div key={item.id} className="flex justify-between">
            <div>
              {editTodoId === item.id ? (
                <input value={item.todo} onChange={onChangeTodo} />
              ) : (
                <span>{item.id + " " + item.todo + " ❌"}</span>
              )}
            </div>
            {editTodoId === item.id ? (
              <Button
                onClick={() => saveEditedTodo(item.id)}
                buttonName="Save"
              />
            ) : (
              <Button
                onClick={() => handleEditTodo(item.id)}
                buttonName="Edit"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
