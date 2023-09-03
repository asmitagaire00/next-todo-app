import React, { useState } from "react";

import TodoItem from "@/modules/todoItem";
import Button from "@/components/button";

interface Items {
  id: string;
  todo: string | undefined;
  status: string;
}

const TodoList = () => {
  const [todoList, setTodoList] = useState<Array<Items>>([]);
  const [todo, setTodo] = useState<string | undefined>("");

  const [editTodoId, setEditTodoId] = useState<string | undefined>("");

  const addTodoList = (todoItem: {
    id: string;
    todo: string | undefined;
    status: string;
  }) => {
    setTodoList([
      ...todoList,
      { id: todoItem.id, todo: todoItem.todo, status: todoItem.status },
    ]);
  };

  const handleEditTodo = (todoId: string) => {
    setEditTodoId(todoId);
  };

  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const saveEditedTodo = (itemId: string) => {};

  return (
    <div>
      <TodoItem todo={todo} setTodo={setTodo} addTodoList={addTodoList} />
      <div className="mt-4">
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
