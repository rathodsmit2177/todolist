

export default function Home() {
  return (
    <div className=" h-full items-center flex justify-center gap-6">
        <div className=" flex-col  items-center justify-center border-2 border-blue-400 p-10 w-1/3 gap-2">
        
            <div className="text-2xl font-bold flex justify-center w-full ">
                Todo List
            </div>
            <div className="py-5 flex justify-between ">
                <input type="text" className="border-2 border-gray-400 p-3 rounded-lg w-full  " placeholder="Add Todo"></input>
                <button className="bg-blue-400 text-white ml-4 p-2 px-7 rounded-lg hover:bg-blue-300">Add</button>
            </div> 
            <div className="border-t-2 border-b-2 border-gray-200 py-10">
                text
            </div>

        </div>  
    </div>
  );
}
