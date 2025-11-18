import React, { useEffect, useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
export interface list{
    list:string[];
}

export const TodoList = () => {

    const [todoLists,setTodoList]= useState <string> (()=>{

    const storedList = localStorage.getItem("TodoList") || "[]";
    return storedList ? JSON.parse(storedList) : [];
    }
)


  const handleRemove = (indexRemove: number) =>{
    const datalist = localStorage.getItem("TodoList") || "[]";
    const list = JSON.parse(datalist);
    const updatedList = list.filter((list:string, index:number) => 
        index !== indexRemove
    );
    setTodoList(updatedList);
  }

  useEffect(()=>{
    localStorage.setItem("TodoList",JSON.stringify(todoLists))
  },[todoLists]);
        console.log(todoLists);
    return (
  
    <div>
       { todoLists.map((list:string[],index:number) => (
           <div key={index} className='flex justify-between'>
             <div >
                {list}
            </div>
             <div>
                <button onClick={()=>handleRemove(index)}>
                  <MdDeleteForever />
                  </button>
             </div>
            </div>
        ))}
    </div>    
  )
}
