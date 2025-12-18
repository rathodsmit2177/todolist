'use client';

import { useState } from "react";

export const InputCom = () => {
  const [text, setText] = useState('');
  const [data, setData] = useState<string[]>([]);

  const handleClick = () => {
    if (text.trim() === '') return;
    setData((prev) => [...prev, text]);
    setText('');
  };

  const removeTodo = (indexToRemove: number) => {
    setData((prev) => prev.filter((_, index) => index !== indexToRemove));
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Add your todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-2 border-gray-300 p-2 rounded-md w-full"
      />

      <button
        onClick={handleClick}
        className="mt-2 bg-blue-500 text-white p-2 rounded-md w-full"
      >
        Add Todo
      </button>
      <ul className="mt-4 border-t-2 border-gray-300 pt-2">
        {data.map((item, index) => (
          <li key={index} className=" py-1 flex justify-between">
            {item} <button className="text-red-500 hover:text-red-700" onClick={() => removeTodo(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
