'use client'
import React, { useState } from 'react'
import { TodoList } from './TodoList';

export const Input = () => {
    
    const [text,setText] = useState<string>("");

    const handleOnClick = () =>{
        console.log(text);
        const list = localStorage.getItem("TodoList") || '[]';
        const toList = JSON.parse(list);
        const updateTodo = [...toList, text];
        localStorage.setItem("TodoList",JSON.stringify(updateTodo));       
        setText("");
    }
    


  return (
    <>
        <div className="py-5 flex justify-between w-full">
            <input type="text"  placeholder="Add Todo" value={text} onChange={(e)=>setText(e.target.value)} className="border-2 border-gray-400 p-3 rounded-lg w-full"></input>
             <button className="bg-blue-400 text-white ml-4 p-2 px-7 rounded-lg hover:bg-blue-300" onClick={handleOnClick} >Add</button>
        </div> 
        <div>
            <TodoList/>
        </div>
    </>
  )
}
