'use client';

import { useState } from "react";

export const InputCom = () => {

    const [text, setText] = useState('');


const handleClick = () => {
    console.log(text);
}
  return (
    <div>
        <input type ="text" placeholder='Add your todo' value={text} onChange={(e) => setText(e.target.value)} className='border-2 border-gray-300 p-2 rounded-md w-full'/>
        <button onClick={handleClick} className="mt-2 bg-blue-500 text-white p-2 rounded-md w-full">Add Todo</button>
    </div>
  )
}
