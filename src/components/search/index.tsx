import React, { useState } from "react";

interface SearchInput {
  todo: string | undefined;
  setTodo: React.Dispatch<React.SetStateAction<string | undefined>>;
  handleTodoChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Search = ({ todo, handleTodoChange }: SearchInput) => {
  console.log("todo value is:", todo);

  return (
    <div>
      <input
        type="text"
        className="p-2 mr-2 border border-gray-300"
        value={todo}
        onChange={handleTodoChange}
      />
    </div>
  );
};

export default Search;
