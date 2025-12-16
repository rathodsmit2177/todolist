import { InputCom } from "@/components/input";

export default function Home() {
  return (
    <div className=" h-screen items-center flex justify-center gap-6">
        <div className=" flex-col items-center justify-center border-2 border-blue-400 p-10 w-1/3 gap-2">
            <div className="text-2xl font-bold flex justify-center ">
                Todo List
            </div>
            <div>
              <InputCom/>
            </div>
        </div>
    </div>
  );
}
