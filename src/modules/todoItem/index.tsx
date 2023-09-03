import Button from "@/components/button";
import Search from "@/components/search";
import React, { useState } from "react";
import { nanoid } from "nanoid";

interface TodoItemProps {
  todo: string | undefined;
  setTodo: React.Dispatch<React.SetStateAction<string | undefined>>;
  addTodoList: (todoItem: {
    id: string;
    todo: string | undefined;
    status: string;
  }) => void;
}

const TodoItem = ({ addTodoList, todo, setTodo }: TodoItemProps) => {
  const handleAddTodo = () => {
    const todoId = nanoid(5);
    addTodoList({ id: todoId, todo: todo, status: "Not completed" });
  };

  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <div className="flex justify-center align-middle mt-10 ">
      <Search
        todo={todo}
        setTodo={setTodo}
        handleTodoChange={handleTodoChange}
      />
      <Button onClick={handleAddTodo} buttonName="Add Todo" />
    </div>
  );
};

export default TodoItem;
